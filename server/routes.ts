import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Configure nodemailer transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER,
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store submission in memory
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification to owner
      const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER || "owner@medicore-pharma.com";
      
      const emailContent = `
        New Contact Form Submission from MediCore Pharmaceuticals Website
        
        Name: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone || "Not provided"}
        Company: ${validatedData.company || "Not provided"}
        Inquiry Type: ${validatedData.inquiryType || "Not specified"}
        
        Message:
        ${validatedData.message}
        
        Submitted at: ${new Date().toLocaleString()}
        Submission ID: ${submission.id}
      `;

      await transporter.sendMail({
        from: process.env.SMTP_USER || "noreply@medicore-pharma.com",
        to: ownerEmail,
        subject: `New Contact Form Submission - ${validatedData.firstName} ${validatedData.lastName}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      });

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully. We'll get back to you within 24 hours.",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit contact form. Please try again.",
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact submissions",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// server/admin.ts
import AdminJS from "adminjs";
import * as AdminJSExpress from "@adminjs/express";
import { Express } from "express";

// Optionally import your DB models and adapter here
// e.g., import { Database, Resource } from "@adminjs/typeorm";

export async function setupAdmin(app: Express) {
  const admin = new AdminJS({
    resources: [],
    rootPath: "/admin",
  });

  const router = AdminJSExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
        return { email };
      }
      return null;
    },
    cookiePassword: process.env.COOKIE_SECRET || "some-secret",
  });

  app.use(admin.options.rootPath, router);
}
// server/admin.ts
import AdminJS from "adminjs";
import * as AdminJSExpress from "@adminjs/express";
import { Express } from "express";

// Optionally import your DB models and adapter here
// e.g., import { Database, Resource } from "@adminjs/typeorm";

export async function setupAdmin(app: Express) {
  const admin = new AdminJS({
    // You can add your resources (models) here
    resources: [],
    rootPath: "/admin",
  });

  const router = AdminJSExpress.buildRouter(admin);

  app.use(admin.options.rootPath, router);
}
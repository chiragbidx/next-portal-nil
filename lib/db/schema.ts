import "server-only";

import { pgTable, text, timestamp, uniqueIndex, integer, real, uuid, foreignKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Existing tables omitted for brevity — leave them unchanged

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  passwordHash: text("password_hash").notNull(),
  emailVerified: timestamp("email_verified", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const teams = pgTable("teams", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const teamMembers = pgTable(
  "team_members",
  {
    id: text("id")
      .notNull()
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").notNull().default("member"),
    joinedAt: timestamp("joined_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    uniqueIndex("team_members_team_user_idx").on(table.teamId, table.userId),
  ]
);

export const teamInvitations = pgTable("team_invitations", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: text("role").notNull().default("member"),
  token: text("token").notNull().unique(),
  invitedByUserId: text("invited_by_user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  status: text("status").notNull().default("pending"),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const authTokens = pgTable("auth_tokens", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  type: text("type").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const featureItems = pgTable("feature_items", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const candidates = pgTable("candidates", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  resumeLink: text("resume_link"),
  status: text("status").notNull(), // e.g., applied, interviewed, etc.
  tags: text("tags"), // comma-separated tags
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
},
(table) => [
  uniqueIndex("candidate_email_team_idx").on(table.teamId, table.email)
]);

export const clients = pgTable("clients", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  companyName: text("company_name").notNull(),
  mainContact: text("main_contact").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
},
(table) => [
  uniqueIndex("client_email_team_idx").on(table.teamId, table.email)
]);

export const jobOrders = pgTable("job_orders", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  clientId: text("client_id")
    .notNull()
    .references(() => clients.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull().default("open"),
  assignedRecruiter: text("assigned_recruiter"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const candidateJobOrders = pgTable("candidate_job_orders", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  candidateId: text("candidate_id")
    .notNull()
    .references(() => candidates.id, { onDelete: "cascade" }),
  jobOrderId: text("job_order_id")
    .notNull()
    .references(() => jobOrders.id, { onDelete: "cascade" }),
  stage: text("stage").notNull(), // applied, interviewed, offered, placed, rejected
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
},
(table) => [
  uniqueIndex("candidate_joborder_unique_idx").on(table.teamId, table.candidateId, table.jobOrderId)
]);

export const placements = pgTable("placements", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  candidateId: text("candidate_id")
    .notNull()
    .references(() => candidates.id, { onDelete: "cascade" }),
  jobOrderId: text("job_order_id")
    .notNull()
    .references(() => jobOrders.id, { onDelete: "cascade" }),
  clientId: text("client_id")
    .notNull()
    .references(() => clients.id, { onDelete: "cascade" }),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  salary: real("salary"),
  fee: real("fee"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const activityLog = pgTable("activity_log", {
  id: text("id").notNull().default(sql`gen_random_uuid()`).primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "set null" }),
  action: text("action").notNull(), // create, update, delete etc.
  entity: text("entity").notNull(), // candidates, jobs, etc.
  entityId: text("entity_id"),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
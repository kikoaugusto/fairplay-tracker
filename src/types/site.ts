export type SiteStatus = 
  | "pending" 
  | "under_investigation"
  | "enforcement_action"
  | "taken_down"
  | "dismissed"
  | "reopened"
  | "active"
  | "blocked";

export type SiteType = "whitelist" | "blacklist" | "suspicious";

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  createdBy: string;
  siteId: number;
}

export interface Site {
  id: number;
  domain: string;
  status: SiteStatus;
  reason?: string;
  operator?: string;
  licenseNumber?: string;
  dateReported?: string;
  lastUpdated?: string;
  comments?: Comment[];
  priority?: "low" | "medium" | "high";
  assignedTo?: string;
}
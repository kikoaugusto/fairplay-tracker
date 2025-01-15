export type SiteStatus = "pending" | "under_investigation" | "active" | "blocked" | "taken_down";

export type SiteType = "whitelist" | "blacklist" | "suspicious";

export interface Site {
  id: number;
  domain: string;
  status: SiteStatus;
  reason?: string;
  operator?: string;
  licenseNumber?: string;
  dateReported?: string;
  lastUpdated?: string;
}
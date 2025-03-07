/*
 * Copyright (c) 2021 - 2023, Ludvig Lundgren and the autobrr contributors.
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

type NotificationType = "DISCORD" | "NOTIFIARR" | "TELEGRAM" | "PUSHOVER";
type NotificationEvent = "PUSH_APPROVED" | "PUSH_REJECTED" | "PUSH_ERROR" | "IRC_DISCONNECTED" | "IRC_RECONNECTED" | "APP_UPDATE_AVAILABLE";

interface Notification {
  id: number;
  name: string;
  enabled: boolean;
  type: NotificationType;
  events: NotificationEvent[];
  webhook?: string;
  token?: string;
  api_key?: string;
  channel?: string;
  priority?: number;
}

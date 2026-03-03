export const MOCK_SCANS = [
    {
        id: "1",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: "4d ago"
    },
    {
        id: "2",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: "4d ago"
    },
    {
        id: "3",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: "4d ago"
    },
    {
        id: "4",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: "4d ago"
    },
    {
        id: "5",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: "4d ago"
    },
    {
        id: "6",
        name: "Web App Servers",
        type: "Greybox",
        status: "Scheduled",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12 },
        lastScan: "4d ago"
    },
    {
        id: "7",
        name: "Web App Servers",
        type: "Greybox",
        status: "Scheduled",
        progress: 100,
        vulnerabilities: { critical: 5, high: 12 },
        lastScan: "4d ago"
    },
    {
        id: "8",
        name: "IoT Devices",
        type: "Blackbox",
        status: "Failed",
        progress: 10,
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        lastScan: "3d ago"
    },
    {
        id: "9",
        name: "Temp Data",
        type: "Blackbox",
        status: "Failed",
        progress: 10,
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        lastScan: "3d ago"
    }
];

export const MOCK_STATS = {
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failed: 100,
    severities: {
        critical: { count: 86, change: '+2%', trend: 'up' },
        high: { count: 16, change: '+0.9%', trend: 'up' },
        medium: { count: 26, change: '+0.9%', trend: 'down' }, // Note trend direction in design
        low: { count: 16, change: '+0.9%', trend: 'up' }
    }
};

export const MOCK_LOGS = [
    { time: "09:00:00", text: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", highlight: "helpdesk.democorp.com" },
    { time: "09:01:00", text: "Good! target is online. Now let me perform port scanning to identify running services." },
    { time: "09:02:00", text: "Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure." },
    { time: "09:03:00", text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", path: "/password/test", comment: "\"TODO: Delete the testing account (test:test)\"" },
    { time: "09:04:00", text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach." },
    { time: "09:05:00", text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", focus: "test:test" },
    { time: "09:06:00", text: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", focus: "'X-UserId: 10032'", vuln: "**IDOR vulnerability**" }
];

export const MOCK_FINDINGS = [
    {
        id: 1,
        severity: "critical",
        time: "10:45:23",
        title: "SQL Injection in Authentication Endpoint",
        path: "/api/users/profile",
        description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access."
    },
    {
        id: 2,
        severity: "high",
        time: "10:45:23",
        title: "Unauthorized Access to User Metadata",
        path: "/api/auth/login",
        description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing."
    },
    {
        id: 3,
        severity: "medium",
        time: "10:45:23",
        title: "Broken Authentication Rate Limiting",
        path: "/api/search",
        description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible."
    }
];

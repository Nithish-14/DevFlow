// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   // publicRoutes: [
//   //   "/",
//   //   "/api/webhooks",
//   //   "question/:id",
//   //   "/tags",
//   //   "/tags/:id",
//   //   "/profile/:id",
//   //   "/community",
//   //   "/jobs",
//   // ],
//   ignoredRoutes: ["/api/webhooks(.*)", "/api/chatgpt"],
// });

// // Make sure that the `/api/webhooks/(.*)` route is not protected here

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/ask-question"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

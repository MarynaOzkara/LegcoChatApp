import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser = internalMutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        imageUrl: v.optional(v.string()),
        username: v.optional(v.string())
    },
    handler: async(ctx, args) => {
        console.log(args);
        const existingUserName = await ctx.db
        .query("users")
        .withIndex("by_username", (q) => q.eq("username", args.username))
        .first()
        if(existingUserName){
            throw new Error("Username is already exist");
            
        }

        const existingEmail = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .first()
        if(existingEmail){
            throw new Error("Email is already exist");
            
        }

        const existingClerkId = await ctx.db
        .query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .first()
        if(existingClerkId){
            throw new Error("Clerk ID is already exist");
            
        }

        const userId = await ctx.db.insert("users", {
            ...args,
            username: args.username || args.name
        })
        return userId
    }
})
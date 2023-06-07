# Christian Bryant – WorkOS

### Demo

- Video 👉 https://www.loom.com/share/70dd2d16d87f4978bec76074f9dff92d
- Deployment 👉 https://christian-bryant-workos.vercel.app/

### Requirement Sanity Check

- [x] You’ll create a SPA with 2 tabs: a tab for “Members” and a tab for “Groups”
- [x] You’ll load the member data from provided JSON (you can grab it from https://front-end-code-challenge.stephenbuilds.workers.dev/)
- [x] Display the list of members in the first tab
- [x] Each row should have a checkbox (or element of your choice) to flag the member as an “admin”
- [x] If a member is flagged as an admin, their data should animate 50px to the right (this is intentionally a bit silly UX wise)
- [x] On the second tab, show the same roster but grouped into “admin” or “standard” groups based on the selections from the first tab
- [x] Use web font (loaded up Inter.. see `Layout.tsx`)
- [x] Use TypeScript

### Technology Choices

**Framework**
I went with [NextJS](https://nextjs.org/), as I'm very familiar (and love using it) as well as wanted to try out the new `app` directory. Also, given the need to proxy the user endpoint, it's simple enough to setup a route handler to make the request.

**Components**
All primitives are composed via Radix and styled with Stitches. I would have made this decision regardless of what I know now about the team btw! 😂
I chose Radix, as it's a no-brainer when it comes to _not_ having to think too hard about ensuring your components meet accessibility standards, as well as keeping you from having to reinvent the wheel to build components like tabs, dropdowns, etc.

**Testing**
Testing wasn't a requirement, but I still thought it was important even for a take home project to ensure that what I was building was indeed working as expected. I utilized Jest (with React Testing Library), and [MSW](https://mswjs.io/) to handle the request to fetch users. Test cases were pretty light weight, specifically to ensure that:

- Loading state rendered during fetch
- Users would render under "members" tab
- Toggling a user as an admin would render them with the correct grouping under the "groups" tab

### Other Notes

**On app structure**
NextJS is opinionated with regards to setting up your page routes, api handlers, etc, so there's nothing super intersting going on in the `app` directory, as it's mostly just handling boiler plate page layout and navigation. The meat of the project lives within the `features` directory, specifically `features/workspace/workspace.tsx`.

One additional thought I want to expand on is how I typically go about organizing components and pages. I like to keep a components folder at the root of the project, that contains a mix of primitives and compound components that are used generally throughout the app (like a modal).

For components that are very specific to a feature, I'll nest a `components` folder within said features directory. You'll see I did this under the `workspace` feature when extending the primitive `ListItem` component for `UserListItem` component.

I find this helps keep things fairly organized, and easier for new team members to find what they are looking for and understand where it's used. However, I've got strong opinions that are loosely held – I'm always open to new suggestions 🙂.

**On loading state**
There is a skeleton loading state, however with Vercel (and depending on your location), the request to fetch users happens really fast. I suggest throttling your network to check it out.

**On fetching users**
I left a comment in the code under `workspace.tsx`, however I want to call it out here as well. If I were actually saving user updates to a db, I would likely _not_ fetch the users and save into a local state object like I'm doing in this project. I would lean towards using SWR for initial fetch (and the numerous benefits like revalidation, caching, dedupe, etc.).. When we need to update the user's admin status, I'd make the request to save the data, and use a mutation to optimistically update the UI.

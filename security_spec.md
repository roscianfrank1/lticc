# Security Specification

## Data Invariants
1. Fixtures and Results must belong to valid teams defined by the club.
2. News posts must have a timestamp.
3. Club information is a single source of truth for the entire site.

## Access Patterns
- **Public**: Any user can read fixtures, results, news, and club info.
- **Admin**: Only authenticated users with the specific admin email (roscian.frank@ten10.com) can write to these collections.

## The "Dirty Dozen" Payloads
1. Create a fixture without a date as a non-admin (Expect FAIL)
2. Update a result margin as a non-admin (Expect FAIL)
3. Delete club_info as a non-admin (Expect FAIL)
4. Create a news post with a 1MB title string (Expect FAIL)
5. Update a fixture's status to an invalid enum value (Expect FAIL)
6. Inject a script tag into a news content field (Expect FAIL by UI/Markdown, but Schema should still limit size)
7. Create a result where lticcScore is not a string (Expect FAIL)
8. Spoof admin by using a fake email (Expect FAIL)
9. Rapidly write 100 results to cause "denial of wallet" (Expect Rate Limiting if possible, but Rules should limit path length/size)
10. Update a news post without an admin auth (Expect FAIL)
11. Create a fixture with an ID that is 500 characters long (Expect FAIL)
12. Attempt to list all users (if they existed) without auth (Expect FAIL)

## Test Environment
Verified in `firestore.rules`.

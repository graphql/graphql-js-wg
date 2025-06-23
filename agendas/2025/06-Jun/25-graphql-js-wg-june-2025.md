| This is an open meeting: To attend, edit and PR this file. (Edit: ✎ above, or press "e") |
| ---------------------------------------------------------------------------------------- |

# GraphQL JS WG — June 2025

GraphQL-JS WG (Working Group) is a monthly virtual meeting of maintainers of
commonly used GraphQL libraries and tools and significant contributors in the
Javascript ecosystem, operated by the GraphQL Foundation. This is an open
meeting in which anyone in the GraphQL community may attend.

The GraphQL-JS WG's primary purpose is to discuss and agree upon proposed
changes to the [GraphQL-JS](https://github.com/graphql/graphql-spec) reference
implementation.


- **Date & Time**: [June 25, 2025, 5:00 – 6:00 PM UTC](https://www.timeanddate.com/worldclock/converter.html?iso=20250625T170000&p1=224&p2=179&p3=136&p4=268&p5=367&p6=438&p7=248&p8=240)
  - View the [calendar][], or subscribe ([Google Calendar][], [ical file][]).
  - _Please Note:_ The date or time may change. Please check this agenda the
    week of the meeting to confirm. While we try to keep all calendars accurate,
    this agenda document is the source of truth.
- **Video Conference Link**: https://zoom.us/j/96871026087
  - _Password:_ graphqljs
- **Live Notes**: [Live Notes][]

[calendar]: https://calendar.google.com/calendar/embed?src=linuxfoundation.org_ik79t9uuj2p32i3r203dgv5mo8%40group.calendar.google.com
[google calendar]: https://calendar.google.com/calendar?cid=bGludXhmb3VuZGF0aW9uLm9yZ19pazc5dDl1dWoycDMyaTNyMjAzZGd2NW1vOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t
[ical file]: https://calendar.google.com/calendar/ical/linuxfoundation.org_ik79t9uuj2p32i3r203dgv5mo8%40group.calendar.google.com/public/basic.ics
[live notes]: https://docs.google.com/document/d/12LM6NZxR22zBwRfihM8Vrf7uV-0gmmO5M3ooSCVS0Hs/edit?usp=sharing

## Attendees

<!-- prettier-ignore -->
| Name                     | GitHub              | Organization       | Location               |
| :----------------------- | :------------------ | :----------------- | :--------------------- |
| Jovi De Croock (Host)    | @JoviDeCroock       | Independent        | Aalst, BE              |
| Yaacov Rydzinski (Host)  | @yaacovCR           | Independent        | Neve Daniel, IL        |


## Agenda

1. Agree to Membership Agreement, Participation & Contribution Guidelines and Code of Conduct (1m, Host)
   - [Specification Membership Agreement](https://github.com/graphql/foundation)
   - [Participation Guidelines](https://github.com/graphql/graphql-wg#participation-guidelines)
   - [Contribution Guide](https://github.com/graphql/graphql-spec/blob/main/CONTRIBUTING.md)
   - [Code of Conduct](https://github.com/graphql/foundation/blob/master/CODE-OF-CONDUCT.md)
   - Meetings are [published to YouTube](https://www.youtube.com/@GraphQLFoundation/videos) and we may use LLM/AI summary tools
1. Introduction of attendees (5m, Host)
1. Determine volunteers for note taking (1m, Host)
1. Review agenda (2m, Host)
1. Check for [ready for review agenda items](https://github.com/graphql/graphql-js-wg/issues?q=is%3Aissue+is%3Aopen+label%3A%22Ready+for+review+%F0%9F%99%8C%22+sort%3Aupdated-desc) (5m, Host)
1. Discuss proposal to change to ESM-only. (35m, Yaacov)
   - current state:
      - we have a 'faux' dual esm and cjs build, i.e. we publish esm `.mjs` files alongside our actual build of cjs `.js` files.
      - we do not use conditional exports, so our cjs build is always loaded, unless the `.mjs` files are requested explicitly.
      - our build script supports an esm-only version:
         - an esm-only version was published as `graphql-esm`, currently out of date, at 16.5.0
         - alternatively, it was suggested we could take care to publish the esm version as `graphql` under a tag, perhaps `latest-esm`, but this does not seem available?
   - proposal:
      - we switch to an esm-only build, dropping the cjs build entirely, now that require(esm) support has landed in Node.js >=20.
      - we use the `development` condition to enable our enhanced instanceOf checks to make our bundle cross-platform.
      - See: https://github.com/graphql/graphql-js/pull/4437
         - converts to esm only
         - triggers the enhanced `instanceOf` check based on the `development` condition.
         - adds integration tests for `instanceOf` checks 
   - relevant old PRs (non-exhaustive list):
      - https://github.com/graphql/graphql-js/pull/4385 => closed => converts to esm only, i.e. part of proposal above, now closed, could be merged separately prior to the rest of 4437.
      - https://github.com/graphql/graphql-js/pull/4096 => open => proposed bundling changes to work around dual package hazard with dual-cjs-esm build
      - https://github.com/graphql/graphql-js/pull/3674 => closed => earlier proposal to add conditional exports
      - https://github.com/graphql/graphql-js/pull/3361 => merged => include cjs and esm builds via js and mjs extensions (got us to our current state)
      - https://github.com/graphql/graphql-js/pull/3552 => merged => converted to esm only, but reverted later by 3361
   - relevant issues, reverse chronological order (non-exhaustive list):
      - https://github.com/graphql/graphql-js/issues/4062 => bundling suggestions, basis for https://github.com/graphql/graphql-js/pull/4437
      - https://github.com/graphql/graphql-js/issues/3603 => Provide clear path for dual graphql-js 16/17 support as an esm and cjs library author
      - https://github.com/graphql/graphql-js/issues/2740 => dual package errors with our cjs/esm builds?
      - https://github.com/graphql/graphql-js/issues/2721 => ESM named exports are not available with "type": "module"
   - main advantage of proposal:
      - simplifies everything for us, no dual build, no dual package, no dual tag, no dual package hazard.
   - main disadvantages of proposal:
      - may leave some users behind.
        - one example, users using Jest, which sends code Node's `vm` module
           - although we are an ESM-only dependency for a CJS project (rather than an ESM project), so is relatively trivial to get working with some additional config added to the build process
           - but still may represent significant unnecessary upgrade friction!
           - `apollo-server` demo with babel: https://github.com/apollographql/apollo-server/pull/8082
           - `apollo-server` demo with swc:https://github.com/apollographql/apollo-server/pull/8083      
          - minimal reproduction of fix with babel: https://github.com/yaacovCR/require-esm-test
   - alternatives:
      - dual build a la https://github.com/graphql/graphql-js/pull/4096 vs alternatively scheme in https://github.com/nodejs/node/issues/52174
      - move to ESM-only, but provide a cjs build either via `graphql-cjs` or a tag under `graphql`.
      - do nothing in v17, but quickly release v18 with some additional option.

// @ts-check

/** @type {import('wgutils').Config} */
const config = {
  name: "GraphQL JS WG",
  repoUrl: "https://github.com/graphql/graphql-js-wg",
  videoConferenceDetails: `https://zoom.us/j/96871026087
  - _Password:_ graphqljs`,
  liveNotesUrl:
    "https://docs.google.com/document/d/12LM6NZxR22zBwRfihM8Vrf7uV-0gmmO5M3ooSCVS0Hs/edit?usp=sharing",
  timezone: "UTC",
  frequency: "monthly",
  nth: -1,
  weekday: "W", // M, Tu, W, Th, F, Sa, Su
  time: "17:00-18:00", // 24-hour clock, range
  attendeesTemplate: `\
| Name                     | GitHub              | Organization       | Location               |
| :----------------------- | :------------------ | :----------------- | :--------------------- |
| Jovi De Croock (Host)    | @JoviDeCroock       | Independent        | Aalst, BE              |
`,
  description: `\
GraphQL-JS WG (Working Group) is a monthly virtual meeting of maintainers of
commonly used GraphQL libraries and tools and significant contributors in the
Javascript ecosystem, operated by the GraphQL Foundation. This is an open
meeting in which anyone in the GraphQL community may attend.

The GraphQL-JS WG's primary purpose is to discuss and agree upon proposed
changes to the [GraphQL-JS](https://github.com/graphql/graphql-spec) reference
implementation.
`,
  /*
  // Additional configuration (optional):

  agendasFolder: "agendas",
  dateAndTimeLocations: 'p1=224&p2=179&p3=136&p4=37&p5=239&p6=101&p7=152',
  joiningAMeetingFile: "JoiningAMeeting.md",
  filenameFragment: "wg-primary",
  links: {
    "graphql specification": "https://github.com/graphql/graphql-spec",
    calendar: "https://calendar.google.com/calendar/embed?src=linuxfoundation.org_ik79t9uuj2p32i3r203dgv5mo8%40group.calendar.google.com",
"google calendar": "https://calendar.google.com/calendar?cid=bGludXhmb3VuZGF0aW9uLm9yZ19pazc5dDl1dWoycDMyaTNyMjAzZGd2NW1vOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
"ical file": "https://calendar.google.com/calendar/ical/linuxfoundation.org_ik79t9uuj2p32i3r203dgv5mo8%40group.calendar.google.com/public/basic.ics",
  },
  secondaryMeetings: [
    {
      // Wednesday, not Thursday
      dayOffset: -1,
      nth: 2,
      time: "16:00-17:00",
      name: "Secondary, APAC",
      // filenameFragment: "wg-secondary-apac",
      description: `\
The GraphQL Working Group meets regularly to discuss changes to the
[GraphQL Specification][] and other core GraphQL projects. This is an open
meeting in which anyone in the GraphQL community may attend.

This is a secondary meeting, timed to be acceptable for those in Asia Pacific
timezones, which typically meets on the second Wednesday of the month. The
primary meeting is preferred for new agenda, where this meeting is for overflow
agenda items, follow ups from the primary meeting, or agenda introduced by those
who could not make the primary meeting time.`,
    },
    {
      nth: 3,
      time: "10:30-12:00",
      name: "Secondary, EU",
      filenameFragment: "wg-secondary-eu",
      description: `\
The GraphQL Working Group meets regularly to discuss changes to the
[GraphQL Specification][] and other core GraphQL projects. This is an open
meeting in which anyone in the GraphQL community may attend.

This is a secondary meeting, timed to be acceptable for those in European
timezones, which typically meets on the third Thursday of the month. The
primary meeting is preferred for new agenda, where this meeting is for overflow
agenda items, follow ups from the primary meeting, or agenda introduced by those
who could not make the primary meeting time.`,
    },
  ],
*/
};

module.exports = config;

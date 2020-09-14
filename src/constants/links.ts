export const categories = [
    {
      category: 'technology',
      displayName: 'Technology',
      linkData: [
        {
          header: 'Engineering Blogs',
          links: [
            {
                descriptor: 'How AirBNB Handles Distributed Payments',
                url: 'https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb',
            },
            {
                descriptor: 'Domain-Oriented Microservice Architecture - Uber',
                url: 'https://eng.uber.com/microservice-architecture/',
            },
            {
                descriptor: 'Desparately Seeking Squircles - Figma',
                url: 'https://medium.com/figma-design/desperately-seeking-squircles-8eb8db9b654b'
            },
            {
                descriptor: 'How Square Handles Accounting',
                url: 'https://developer.squareup.com/blog/books-an-immutable-double-entry-accounting-database-service/',
            }
          ]
        },
        {
          header: 'Engineering Concepts/Practices',
          links: [
            {
                descriptor: 'Clean Architecture',
                url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
            },
            {
                descriptor: 'A Codebase is an Organism',
                url: 'https://meltingasphalt.com/a-codebase-is-an-organism/',
            },
            {
                descriptor: 'Notes on Distributed Systems for Youngbloods',
                url: 'https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/',
            },
            {
                descriptor: 'What are the React Team Principles',
                url: 'https://overreacted.io/what-are-the-react-team-principles/',
            },
            {
                descriptor: 'Designing Data Intensive Applications - OReilly',
                url: 'https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
            },
            {
                descriptor: 'The Missing Semester of your CS Education - MIT',
                url: 'https://missing.csail.mit.edu/',
            },
            {
                descriptor: 'Pagination',
                url: 'https://hackernoon.com/guys-were-doing-pagination-wrong-f6c18a91b232',
            },
            {
                descriptor: 'Docker - A Practical Mini-Series',
                url: 'https://github.com/opscentric/mini-series/tree/master/docker-and-containers',
            },
            {
                descriptor: 'Increment - Frontend',
                url: 'https://increment.com/frontend/',
            },
            {
                descriptor: 'Numbers Every Engineer Should Know',
                url: 'http://brenocon.com/dean_perf.html',
            }
          ]
        },
        {
            header: 'Cool Tech Topics',
            links: [
              {
                  descriptor: 'Shadow - The app that derailed the Iowa Caucus',
                  url: 'https://www.bloomberg.com/news/articles/2020-02-05/-we-feel-really-terrible-says-ceo-whose-app-roiled-iowa-caucus',
              },
              {
                  descriptor: 'I am Harvesting your Credit Card Numbers and Passwords from your site',
                  url: 'https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5',
              },
              {
                  descriptor: 'Ghidra Software Reverse Engineering Framework',
                  url: 'https://github.com/NationalSecurityAgency/ghidra',
              },
              {
                  descriptor: 'Books I Recommend to my Software Engineering Students',
                  url: 'http://web.eecs.utk.edu/~azh/blog/booksformystudents.html',
              }
            ]
          },
      ]
    },
    {
        category: 'business',
        displayName: 'Business/Startups',
        linkData: [
          {
            header: 'Startups And How to Run Them',
            links: [
              {
                  descriptor: 'A Balanced Approach to Growth',
                  url: 'https://medium.com/@ibringtraffic/a-balanced-approach-to-growth-ad1e1bc2c038',
              },
              {
                  descriptor: 'Nobody Cares About Quality',
                  url: 'https://lethain.com/nobody-cares-about-quality/',
              },
              {
                  descriptor: 'The Magic That Makes Customer Experiences Stick',
                  url: 'https://sloanreview.mit.edu/article/the-magic-that-makes-customer-experiences-stick/', 
              },
              {
                  descriptor: 'Measuring Decision Effectiveness',
                  url: 'https://www.bain.com/insights/measuring-decision-effectiveness/',
              },
              {
                  descriptor: 'Hats and How to Wear Them in Startups',
                  url: 'https://medium.com/@arcb/hats-and-how-to-wear-them-in-startups-7650e06ef0f6',
              },
              {
                  descriptor: 'Why Amazon is Eating the World',
                  url: 'https://techcrunch.com/2017/05/14/why-amazon-is-eating-the-world/?guccounter=1',
              }
            ]
          },
        ]
      },
      {
        category: 'healthcare',
        displayName: 'Healthcare',
        linkData: [
          {
            header: 'Building Healtcare With Empathy',
            links: [
              {
                  descriptor: 'Our Hospital’s New Software Frets About My ‘Deficiencies',
                  url: 'https://www.nytimes.com/2019/11/01/health/epic-electronic-health-records.html?smid=nytcore-ios-share',
              },
              {
                  descriptor: 'Kind Care Requires Unhurried Conversations',
                  url: 'https://catalyst.nejm.org/doi/full/10.1056/CAT.19.0696',
              },
            ]
          },
          {
              header: 'Problems with the Healthcare System',
              links: [
                  {
                      descriptor: 'The World of Medical Billing - Where Fraud Becomes Legal',
                      url: 'https://www.nytimes.com/2019/12/07/opinion/sunday/medical-billing-fraud.html?smid=nytcore-ios-share',
                  },
                  {
                      descriptor: 'Questionable Medicare Payments to Insurers',
                      url: 'https://www.reuters.com/article/us-usa-health-medicare-payments/u-s-watchdog-finds-6-7-billion-in-questionable-medicare-payments-to-insurers-idUSKBN1YG0YD',
                  },
                  {
                      descriptor: 'Growing Reliance on Hospitals - OneMedical',
                      url: 'https://www.axios.com/one-medicals-ipo-hospital-contract-revenue-35a7b28a-ed5c-4596-ba32-0131c2ee098b.html',
                  }
              ]
          },
          {
              header: 'Cool Healthcare Topics',
              links: [
                  {
                      descriptor: 'The 20 Strangest ICD-10 Codes',
                      url: 'https://www.adsc.com/blog/the-20-most-strange-icd-10-codes',
                  },

              ]
          }
        ]
      },
      {
        category: 'social',
        displayName: 'Social Justice - Coming Soon',
      }
  ]
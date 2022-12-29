import CustomHead from '@components/misc/CustomHead'
import Section from '@components/pages/about/Section'
import Timeline from '@components/pages/about/Timeline'
import Tools from '@components/pages/about/Tools'
import { NextPage } from 'next'
import Image from 'next/image'

// const isOpenForOpp = process.env.isOpenForOpp === 'yes'

const About: NextPage = () => {
  return (
    <>
      <CustomHead title="About" />

      <div id="about-page" className="page-container lg:mb-24">
        <Section id="about-who" className="lg:mt-16">
          <Image
            src="/assets/images/manypixels/html.svg"
            alt="Who am I section, laptop illustration"
            height={280}
            width={480}
            priority
          />

          <Section.Content>
            <Section.Title>Who am I</Section.Title>
            <Section.Paragraph>
              I&#39;m a Junior Web Developer and my goal is to master front-end
              development because, long story short, I really like it. And even
              if the back-end is not an alien technology to me, I simply enjoy
              working on the front-end more. In my spare time, I usually listen
              to music and play the guitar once in a while.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-why" className="mt-14 lg:mt-48">
          <Image
            className="lg:order-last"
            src="/assets/images/manypixels/designer.svg"
            alt="Why me section, list of tools, icons"
            height={300}
            width={480}
            priority
          />

          <Section.Content className="lg:order-first">
            <Section.Title>Why me</Section.Title>
            <Section.Paragraph>
              I enjoy learning and discovering new things, technologies or
              tools. It helps me a lot to grow as a developer and constantly
              improve at my job so that I can provide the best possible
              experience for everyone on the Web.
            </Section.Paragraph>
            <Section.Paragraph className="mt-2">
              Currently, I&#39;m working on improving my problem-solving skills
              and exploring 3D stuff and animations.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-what" className="mt-12 lg:mt-48">
          <Tools />

          <Section.Content>
            <Section.Title>What I use</Section.Title>
            <Section.Paragraph>
              I use a set of modern tools that help me develop better and more
              secure apps. I choose libraries and frameworks that solve existing
              problems faster and more efficiently, but also provide a great
              developer experience overall.
            </Section.Paragraph>
          </Section.Content>
        </Section>

        <Section id="about-timeline" className="mt-16 lg:mt-48" align="top">
          <Section.Content variant="timeline" className="grid items-center">
            <Section.Title className="xl:px-8 2xl:px-12">
              My experiences
            </Section.Title>
            <Timeline events={data.events} />
          </Section.Content>

          <div className="hidden justify-center lg:flex">
            <Image
              src="/assets/images/manypixels/startup.svg"
              alt="Timeline section, rocket illustration"
              height={360}
              width={420}
            />
          </div>
        </Section>
      </div>
    </>
  )
}

const data = {
  events: [
    {
      id: '89528086-0e9b-4500-864b-86c67a4d0661',
      title: "Associate's Degree",
      description: [
        'My very first contact with coding and programming. During these 2 years at University Institute of Technology in Metz, I learned the basics and advanced concepts of algorithms, databases, networks and eventually Web development. I also discovered many programming languages like C, Java, PHP or JavaScript to name a few.',
      ],
      dates: ['2017', '2019'],
      eventDate: '2017',
    },
    {
      id: '263fd381-7fca-432e-9bb1-557766a0032d',
      title: 'Internship at 3d2lux',
      description: [
        'First internship where my studies could finally have been put into practice. I was mostly working with JavaScript and PHP on the main project of my internship. In the meantime, I was maintaining a website powered by WordPress. I learned a lot and the whole experience just made me want to dive even deeper into the Web.',
      ],
      dates: ['04/2019', '06/2019'],
      eventDate: '2019',
    },
    {
      id: 'ee66c0e9-a7ca-4bdb-a7f0-07c38e40a38d',
      title: 'Vocational Degree',
      description: [
        'Back at the same university in Metz, I started discovering popular tools and technologies that help build websites and mobile apps. The course was focusing more on practical stuff rather than theory. I was able to participate in plenty of group projects and build interesting applications with Vue, React or Symfony among others.',
      ],
      dates: ['2020', '2021'],
      eventDate: '2020',
    },
    {
      id: 'a4e33884-f614-4799-9aa3-cf21c335df4a',
      title: 'Web Developer at Dingiso',
      description: [
        'One more internship during which I was responsible for the development of a mobile app in React Native and a back-office in Symfony. After the internship, I continued working at Dingiso for yet another 2 months in order to finish both projects and helped maintain WordPress websites.',
      ],
      dates: ['04/2021', '08/2021'],
      eventDate: '2021',
    },
    {
      id: 'af2dd644-359a-4693-8640-32501871ad68',
      title: 'Web Consultant at Bloomind',
      description: [
        "Not a career path I anticipated, but it turned out to be a significant decision so far. As an entry job, it's an amazing opportunity to be able to work for different clients, with smaller or larger teams and older or modern codebases. To my surprise, there is always something new to learn pretty much everyday.",
      ],
      dates: ['2022', 'Today'],
      eventDate: 'Now',
    },
  ],
}

export default About

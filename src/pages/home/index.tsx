import React from "react";
import { Layout } from "../../layout";
import {
  ArchiveSection,
  FixedSocial,
  HeroBanner,
  InfoSection,
  InvolvedSection,
  ProgramSection,
} from "../../component";
import { AiOutlineBook, AiOutlineHeart } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";

export const HomePage = () => {
  return (
    <Layout>
      <HeroBanner />
      <FixedSocial />
      <InfoSection
        btnText="Get Involved"
        description="Addressing poverty, healthcare, unemployment, and human rights starts with educating children in need. Education empowers them with knowledge and skills for better economic stability, and social equity. Investing in education builds foundation for a brighter future."
        image={require("../../assets/image1.png")}
        redirectionPath="/get-involved"
        title="Empowering Communities Through Education"
      />
      <InfoSection
        btnText="Know Us"
        description="Sparkling Wings NGO, founded in 2019, is a non-profit organization dedicated to empowering and uplifting women and children in marginalized communities. With a mission to promote gender equality, education, and economic opportunities."
        image={require("../../assets/image2.png")}
        redirectionPath="/about-us"
        title="About Us"
      />
      <ProgramSection
        data={[
          {
            image: require("../../assets/image3.png"),
            description:
              "Sparkling Wings NGO is primarily an underprivileged child education NGO that wants to empower children...",
            title: "Education",
            redirectionPath: "/",
          },
          {
            image: require("../../assets/image4.png"),
            description:
              "Sparkling Wings NGO organizes many programs like beach clean up activities,  Sports day and cultural day for children...",
            title: "Civic Volunteer",
            redirectionPath: "/",
          },
          {
            image: require("../../assets/image5.png"),
            description: " ",
            title: "Act Of Kindness",
            redirectionPath: "/",
          },
        ]}
      />
      <InvolvedSection
        points={[
          {
            desc: "Volunteer your time: Sparkling Wings NGO relies on volunteers to carry out its programs and activities. ",
            Icon: AiOutlineHeart,
            redirectionPath: "",
            title: "Volunteers With Us",
          },
          {
            desc: "Join with us for internship programs: Sparkling Wings NGO also provides internship programs.",
            Icon: AiOutlineBook,
            redirectionPath: "",
            title: "Internship",
          },
          {
            desc: "Partner with us: If you represent a business or organization, consider partnering with our NGO.",
            Icon: MdGroups2,
            redirectionPath: "",
            title: "Partnership With Us",
          },
        ]}
      />
      <ArchiveSection />
    </Layout>
  );
};

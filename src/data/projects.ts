import iotBreadboard from "../assets/projects/iot-breadboard.jpg";
import yularaShot from "../assets/projects/yulara.jpg";

export type Project = {
  title: string;
  period?: string;
  tagline: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  image?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "BNN Systolic Accelerator (SystemVerilog)",
    period: "May 2025 – Dec 2025",
    tagline: "Patent-pending BNN accelerator RTL with systolic architecture + sparsity support",
    description:
      "Designed and verified a 64×64 BNN accelerator in SystemVerilog; research-focused work targeting high-throughput and energy efficiency, with Q1 journal under review.",
    tags: ["SystemVerilog", "RTL", "Systolic Array", "BNN", "FPGA/ASIC"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/HUNT-001/bnn-accelerator" },
    ],
    highlight: true,
  },
  {
    title: "Yulara Solar Digital Twin (Cloud-Native AI Analytics)",
    period: "Jan 2026 – Feb 2026",
    tagline: "Serverless solar forecasting + NLP Text-to-SQL automation",
    description:
      "Built a cloud-native solar digital twin using XGBoost forecasting and an NLP Text-to-SQL backend for automated technical tasks.",
    tags: ["AWS", "XGBoost", "Serverless", "NLP", "Data Pipelines"],
    links: [
      { label: "Live Demo", url: "https://musical-tapioca-408587.netlify.app/" },
    ],  
    image: yularaShot,
  },
  {
    title: "Automated RISC-V Verification Environment (Agentic AI)",
    period: "Nov 2025 – Present",
    tagline: "Differential testing + coverage-guided test generation",
    description:
      "Developed an agentic RISC-V verification framework using Spike differential testing and adaptive, coverage-guided test generation to improve bug discovery.",
    tags: ["Verification", "RISC-V", "Agentic AI", "Testing"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
  },
  {
    title: "AI-driven Marine Database System (MVP)",
    period: "Nov 2025 – Dec 2025",
    tagline: "Ingestion + preprocessing + storage for heterogeneous marine data",
    description:
      "Built an MVP for ingesting, preprocessing, and storing heterogeneous marine datasets for analysis workflows.",
    tags: ["Data Engineering", "Pipelines", "MVP"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
  },
  {
    title: "Embedded/IoT Prototyping (Hardware Build)",
    tagline: "Sensors + microcontroller + display prototyping (demo asset)",
    description:
      "A representative hardware prototype build to show hands-on embedded integration and measurement/monitoring workflows.",
    tags: ["Embedded", "Prototyping", "Sensors", "Hardware"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
    image: iotBreadboard,
  },
];

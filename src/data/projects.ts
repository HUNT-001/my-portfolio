import iotBreadboard from "../assets/projects/iot-breadboard.jpg";
import yulara from "../assets/projects/yulara.jpg";

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
    title: "BNN Systolic Accelerator",
    period: "May 2025 – Dec 2025",
    tagline: "Patent-pending 64×64 BNN accelerator in SystemVerilog",
    description:
      "Designed and verified a patent-pending 64×64 Binary Neural Network accelerator in SystemVerilog with broadcast and systolic array topologies. Achieves 10.67× speedup, 374.5 GOPs throughput, and 92.8 GOPs/W efficiency. Q1 journal under review.",
    tags: ["SystemVerilog", "RTL", "Systolic Array", "FPGA/ASIC", "BNN", "Sparsity"],
    links: [{ label: "GitHub Repo", url: "https://github.com/HUNT-001/bnn-accelerator" }],
    highlight: true,
  },
  {
    title: "Yulara Solar Digital Twin",
    period: "Jan 2026 – Feb 2026",
    tagline: "Cloud-native AI analytics platform for solar forecasting",
    description:
      "Deployed a serverless cloud architecture on AWS integrating XGBoost forecasting models and a local NLP Text-to-SQL backend for automated technical analysis tasks.",
    tags: ["AWS", "XGBoost", "Serverless", "NLP", "Text-to-SQL", "Netlify"],
    links: [
      { label: "Live Demo", url: "https://musical-tapioca-408587.netlify.app/" },
    ],
    image: yulara,
  },
  {
    title: "Automated RISC-V Verification",
    period: "Nov 2025 – Present",
    tagline: "Agentic AI-driven differential testing framework",
    description:
      "Developed an agentic RISC-V verification framework utilizing Spike differential testing and adaptive, coverage-guided test generation to significantly improve hardware bug discovery.",
    tags: ["RISC-V", "Verification", "Agentic AI", "Coverage-Guided", "Spike"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
  },
  {
    title: "AI Marine Database System",
    period: "Nov 2025 – Dec 2025",
    tagline: "SIH 2025 National Finalist — heterogeneous data ingestion MVP",
    description:
      "Built a Smart India Hackathon finalist MVP for ingesting, preprocessing, and storing heterogeneous marine datasets. Architected an AI-driven unified database system for complex marine data analysis.",
    tags: ["Data Engineering", "AI", "SIH 2025", "MVP", "Marine Data"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
  },
  {
    title: "Coherent BNN Accelerator Stack",
    period: "Feb 2026 – Present",
    tagline: "Parameterized RTL with OpenXLA backend + CXL-oriented architecture",
    description:
      "Building a next-generation parameterized RTL-based BNN accelerator with an OpenXLA backend and descriptor-driven, CXL-oriented coherent architecture for scalable AI systems.",
    tags: ["CXL", "OpenXLA", "RTL", "SystemVerilog", "MLIR", "BNN"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
    highlight: true,
  },
  {
    title: "Embedded IoT Prototype",
    tagline: "Sensor integration with microcontroller and OLED display",
    description:
      "Hands-on embedded systems prototype integrating multiple sensors with a microcontroller and OLED display for real-time monitoring and visualization.",
    tags: ["Embedded C", "IoT", "Sensors", "OLED", "Prototyping"],
    links: [{ label: "GitHub", url: "https://github.com/HUNT-001" }],
    image: iotBreadboard,
  },
];

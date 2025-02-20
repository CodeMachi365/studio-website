import { ProjectDatum } from "@/types/shared";

export const PROJECTS: ProjectDatum[] = [
  {
    title: "EcoTracker Pro",
    description: `A comprehensive environmental monitoring application designed for sustainable living.
    - Developed real-time carbon footprint tracking features
    - Implemented machine learning algorithms for consumption pattern analysis
    - Built an intuitive dashboard with interactive data visualizations`,
    tags: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
    imageUrl: "https://picsum.photos/400/300",
  },
  {
    title: "SmartHealth Connect",
    description: `An integrated healthcare platform connecting patients with medical professionals.
    - Created secure video consultation infrastructure
    - Developed automated appointment scheduling system
    - Implemented HIPAA-compliant data storage and sharing features
    - Built real-time notification system for medical emergencies`,
    tags: ["Flutter", "Firebase", "WebRTC", "Cloud Functions"],
    imageUrl: "https://picsum.photos/400/300",
  },
];

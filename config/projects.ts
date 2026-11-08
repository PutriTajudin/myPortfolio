import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "tmdb-movie-data-preprocessing-pca",
    companyName: "TMDB Movie Data Preprocessing & PCA",
    type: "Personal",
    category: ["Data Science"],
    shortDescription:
      "Cleaned and integrated the TMDB 5000 movie dataset, extracted structured features, and reduced eight numerical features to four principal components while retaining 80.68% of variance.",
    githubLink:
      "https://github.com/PutriTajudin/tmdb-movie-data-preprocessing-pca",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "scikit-learn",
    ],
    startDate: new Date("2026-10-16"),
    endDate: new Date("2026-10-16"),
    companyLogoImg: "/projects/tmdb-pca/cumulative_explained_pca.png",
    pagesInfoArr: [
      {
        title: "Correlation Analysis",
        description:
          "Analyzed relationships among the numerical movie attributes before dimensionality reduction.",
        imgArr: ["/projects/tmdb-pca/correlation_heatmap.png"],
      },
      {
        title: "PCA Results",
        description:
          "Selected four principal components that retain 80.68% of the total variance from eight numerical features.",
        imgArr: [
          "/projects/tmdb-pca/cumulative_explained_pca.png",
          "/projects/tmdb-pca/pca_loadings.png",
          "/projects/tmdb-pca/pca_scatter.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project builds a data preprocessing pipeline for the TMDB 5000 Movie Dataset. The workflow inspects and cleans missing or unavailable values, integrates movie and credits data, and extracts structured information such as genres, cast, and directors.",
        "Principal Component Analysis was applied to eight numerical features after median imputation and standardization. Four components reduce the feature dimensions by 50% while retaining 80.68% of the total variance.",
      ],
      bullets: [
        "Integrated the movies and credits datasets using their movie identifiers.",
        "Handled missing values, invalid release dates, and zero values representing unavailable budget and revenue.",
        "Extracted director, genre, cast, genre-count, and cast-count features from nested metadata.",
        "Used correlation analysis to inspect relationships between numerical features.",
        "Reduced eight standardized numerical features to four principal components, retaining 80.68% of the total variance.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

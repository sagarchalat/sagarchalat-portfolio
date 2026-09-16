import resumeAssetPdf from '../assets/Sagar_S_AI-Eng.pdf';
import aqosPoster from '../assets/aqos_project.jpg';
import ragPoster from '../assets/rag_chatbot.jpg';
import llmPoster from '../assets/llm_finetune.jpg';
import mlopsPoster from '../assets/mlops_pipeline.jpg';

const PUBLIC_URL = process.env.PUBLIC_URL || '';
const resumeUrl = resumeAssetPdf || `${PUBLIC_URL}/Sagar_S_AI-Eng.pdf`;

export const portfolioData = {
  personal: {
    name: "Sagar S",
    title: "Agentic AI Engineer",
    roleSubtitle: "Agentic AI | LLM Applications | Multi-Agent AI | RAG | Backend Engineering",
    location: "Bengaluru, India",
    phone: "+91 73384 98489",
    email: "sagarchalatan@gmail.com",
    github: "https://github.com/sagarchalat",
    linkedin: "https://www.linkedin.com/in/sagarchalat",
    website: "https://sagarchalat.github.io/sagarchalat-portfolio/",
    resumeUrl: resumeUrl,
    matchScore: "99% Match",
    seasons: "1.8+ Yrs Exp",
    quality: "Ultra HD 4K",
    summary:
      "Agentic AI Engineer with 1.8+ years of experience designing and delivering production-ready AI applications in Python, FastAPI, LLMs, and Retrieval-Augmented Generation (RAG). Experienced in building multi-agent AI systems, semantic search platforms, and scalable backend services deployed on Docker, Kubernetes, and Google Cloud Platform (GCP). Strong in AI orchestration, REST API design, vector databases, and enterprise AI architecture, with a track record of turning an original concept into a production system.",
    highlights: [
      { label: "Multi-Agent AI", value: "Enterprise", desc: "Automated QA, triage & orchestration via coordinated agents" },
      { label: "FastAPI & APIs", value: "Production", desc: "Modular, tool-callable APIs supporting autonomous workflows" },
      { label: "RAG & Search", value: "Grounded", desc: "Vector embeddings and semantic retrieval on enterprise knowledge" },
      { label: "Cloud & K8s", value: "GCP Native", desc: "Dockerized container clusters deployed on Google Cloud" }
    ],
    education: {
      degree: "Bachelor of Engineering, Information Science & Engineering",
      institution: "Sri Siddhartha Institute of Technology, Karnataka, India",
      year: "2024",
      grade: "First Class with Distinction"
    }
  },

  experience: [
    {
      id: "stl-digital",
      role: "Software Engineer",
      company: "STL Digital",
      location: "Bengaluru, India",
      period: "Jan 2025 – Present",
      status: "CURRENTLY STREAMING • ENTERPRISE AI",
      match: "Top Pick",
      overview:
        "Designing and delivering production-ready AI applications in Python, FastAPI, LLMs, and RAG. Proposed and led the technical architecture and implementation of the enterprise AI QA Operating System (AQOS).",
      episodes: [
        {
          title: "FastAPI Microservices & LLM Workflows",
          desc: "Design and build scalable FastAPI microservices that power enterprise AI applications and expose REST APIs for LLM-driven workflows.",
          metric: "REST APIs"
        },
        {
          title: "Production RAG & Semantic Retrieval",
          desc: "Build production RAG pipelines -- semantic search and vector-based document retrieval -- to ground LLM responses in real enterprise knowledge.",
          metric: "Semantic Search"
        },
        {
          title: "Modular Backend Services & Reusable Contracts",
          desc: "Design modular backend services that connect AI components and enterprise applications through reusable, well-defined API contracts.",
          metric: "API Contracts"
        },
        {
          title: "AI QA Operating System (AQOS) Innovation",
          desc: "Proposed an enterprise AI QA Operating System as an internal innovation initiative and led its technical architecture and implementation with the engineering team -- a platform that automates requirement analysis, test planning, execution, and reporting through coordinated AI agents working over a shared knowledge base.",
          metric: "Multi-Agent"
        },
        {
          title: "Docker, Kubernetes & GCP Deployment",
          desc: "Containerize AI services with Docker and deploy them on Kubernetes clusters running on Google Cloud Platform (GCP).",
          metric: "K8s on GCP"
        },
        {
          title: "Python Automation & Production Linux",
          desc: "Write Python automation for deployment validation and recurring engineering tasks, cutting down manual effort across the team while managing Linux production environments.",
          metric: "Automation"
        }
      ],
      keyAchievements: [
        "Proposed and led the technical architecture of AQOS (AI QA Operating System) from concept to production collaboration.",
        "Built scalable FastAPI microservices powering autonomous multi-agent tool execution.",
        "Engineered production RAG pipelines grounding enterprise LLM responses in corporate knowledge bases.",
        "Containerized and deployed distributed AI microservices on Kubernetes clusters on Google Cloud."
      ],
      techStack: ["Python", "FastAPI", "LangChain", "RAG", "Multi-Agent AI", "Docker", "Kubernetes", "GCP", "PostgreSQL", "FAISS"]
    }
  ],

  skillCategories: [
    { id: "all", label: "Trending All" },
    { id: "agentic_llm", label: "Agentic AI & LLMs" },
    { id: "backend", label: "Backend & Microservices" },
    { id: "databases", label: "Databases & Vector Stores" },
    { id: "cloud_devops", label: "Cloud & DevOps" },
    { id: "languages", label: "Languages" },
    { id: "cs_core", label: "Computer Science Core" }
  ],

  skills: [
    // Agentic AI & LLMs
    {
      name: "Agentic AI",
      category: "agentic_llm",
      level: "96%",
      badge: "Core Specialization",
      description: "Autonomous reasoning agents, goal decomposition, tool calling, execution loops, and self-correcting agentic workflows.",
      tags: ["Autonomous Agents", "Decision Loops", "ReAct", "Tool Use"]
    },
    {
      name: "Multi-Agent Systems",
      category: "agentic_llm",
      level: "95%",
      badge: "Flagship",
      description: "Architecture and coordination of specialized AI agents working cooperatively over shared state and knowledge bases.",
      tags: ["Agent Coordination", "Shared Memory", "Task Delegation", "Consensus"]
    },
    {
      name: "LLM App Development",
      category: "agentic_llm",
      level: "95%",
      badge: "Production",
      description: "Building production-grade LLM applications with structured outputs, function calling, state management, and streaming.",
      tags: ["LangChain", "HuggingFace", "OpenAI", "Anthropic", "Mistral"]
    },
    {
      name: "RAG & Semantic Search",
      category: "agentic_llm",
      level: "95%",
      badge: "Specialist",
      description: "Dense vector embeddings, hybrid retrieval, semantic document search, reranking, and enterprise knowledge grounding.",
      tags: ["Dense Embeddings", "Semantic Search", "Chunking", "Retrieval"]
    },
    {
      name: "Tool Calling & Orchestration",
      category: "agentic_llm",
      level: "94%",
      badge: "Advanced",
      description: "Connecting LLMs to external APIs, databases, execution sandboxes, and orchestrating complex multi-step workflows.",
      tags: ["Tool Calling", "JSON Schemas", "Workflow Orchestration"]
    },
    {
      name: "Prompt Engineering & Evaluation",
      category: "agentic_llm",
      level: "93%",
      badge: "Production",
      description: "Few-shot prompting, chain-of-thought, system prompt design, guardrails, and systematic model evaluation.",
      tags: ["CoT", "Guardrails", "Model Evaluation", "Benchmarking"]
    },

    // Backend & Microservices
    {
      name: "FastAPI",
      category: "backend",
      level: "96%",
      badge: "Primary Backend",
      description: "High-performance asynchronous REST microservices, Pydantic data validation, OpenAPI docs, and streaming AI endpoints.",
      tags: ["AsyncIO", "Pydantic", "REST APIs", "Streaming", "WebSockets"]
    },
    {
      name: "REST APIs & Microservices",
      category: "backend",
      level: "94%",
      badge: "Architecture",
      description: "Modular backend microservice architecture, clean API contracts, error handling, rate limiting, and service integration.",
      tags: ["Microservices", "API Contracts", "JSON APIs", "Swagger"]
    },
    {
      name: "AsyncIO & Flask",
      category: "backend",
      level: "90%",
      badge: "Core Backend",
      description: "Concurrent event loops, asynchronous task queues, background workers, and lightweight Flask services.",
      tags: ["Event Loop", "Concurrency", "Flask", "Worker Queues"]
    },

    // Databases & Vector Stores
    {
      name: "FAISS & ChromaDB",
      category: "databases",
      level: "94%",
      badge: "Vector Core",
      description: "Vector database indexing, cosine similarity search, nearest-neighbor queries, and high-speed semantic retrieval.",
      tags: ["Vector DB", "Embeddings", "HNSW", "Cosine Search"]
    },
    {
      name: "PostgreSQL",
      category: "databases",
      level: "92%",
      badge: "Relational",
      description: "Relational database schema design, indexing, complex analytical queries, transactions, and structured application storage.",
      tags: ["SQL", "Relational", "Indexing", "ACID", "pgvector"]
    },
    {
      name: "MongoDB",
      category: "databases",
      level: "88%",
      badge: "NoSQL",
      description: "Document-oriented database for unstructured data, agent message histories, metadata storage, and flexible schemas.",
      tags: ["BSON", "Collections", "Aggregation Pipeline", "JSON"]
    },

    // Cloud & DevOps
    {
      name: "Google Cloud Platform (GCP)",
      category: "cloud_devops",
      level: "92%",
      badge: "Cloud",
      description: "Production cloud deployments, Google Kubernetes Engine (GKE), Cloud Run, Compute Engine, and Cloud Storage.",
      tags: ["GKE", "Cloud Run", "GCS", "IAM", "Cloud Logging"]
    },
    {
      name: "Docker & Containerization",
      category: "cloud_devops",
      level: "94%",
      badge: "DevOps",
      description: "Containerizing AI microservices, multi-stage optimized builds, environment isolation, and Docker Compose networking.",
      tags: ["Multi-stage", "Docker Compose", "Container Registry"]
    },
    {
      name: "Kubernetes (K8s)",
      category: "cloud_devops",
      level: "88%",
      badge: "Orchestration",
      description: "Cluster pod deployments, service discovery, autoscaling, ConfigMaps, Secrets, and rolling updates for AI services.",
      tags: ["Pods", "Deployments", "Services", "HPA", "GKE"]
    },
    {
      name: "CI/CD & GitHub Actions",
      category: "cloud_devops",
      level: "90%",
      badge: "Automation",
      description: "Automated test execution, linting pipelines, Docker build & push workflows, and continuous deployment to cloud clusters.",
      tags: ["Workflows", "Auto-testing", "Release Pipelines", "Git"]
    },
    {
      name: "Linux & Ubuntu",
      category: "cloud_devops",
      level: "92%",
      badge: "OS & Systems",
      description: "Daily Linux production management, shell scripting, service monitoring, log debugging, and performance profiling.",
      tags: ["Bash", "systemd", "SSH", "Process Management"]
    },

    // Languages
    {
      name: "Python",
      category: "languages",
      level: "97%",
      badge: "Expert",
      description: "Deep expertise in modern Python, typing, object-oriented design, async programming, data manipulation, and automation.",
      tags: ["AsyncIO", "Typing", "OOP", "Decorators", "Automation"]
    },
    {
      name: "Java",
      category: "languages",
      level: "85%",
      badge: "OOP & Systems",
      description: "Object-oriented programming, design patterns, multithreading, collections framework, and robust backend engineering.",
      tags: ["OOP", "Collections", "Multithreading", "Design Patterns"]
    },
    {
      name: "SQL",
      category: "languages",
      level: "90%",
      badge: "Data Query",
      description: "Writing complex queries, joins, aggregations, window functions, and database schema migrations.",
      tags: ["Joins", "Aggregations", "DDL/DML", "Optimization"]
    },
    {
      name: "Bash",
      category: "languages",
      level: "88%",
      badge: "Scripting",
      description: "Shell scripting for server provisioning, automation tasks, deployment validation, and CI/CD pipelines.",
      tags: ["Shell", "Automation", "Scripts", "Pipelines"]
    },

    // Computer Science Core
    {
      name: "Data Structures & Algorithms",
      category: "cs_core",
      level: "92%",
      badge: "Foundations",
      description: "Trees, graphs, dynamic programming, sorting, searching, hashing, and complexity analysis (Big-O).",
      tags: ["Trees", "Graphs", "Dynamic Programming", "Hash Tables"]
    },
    {
      name: "Design Patterns & OOP",
      category: "cs_core",
      level: "92%",
      badge: "Architecture",
      description: "Factory, Singleton, Strategy, Observer, Adapter patterns, clean code principles, and SOLID design.",
      tags: ["SOLID", "Design Patterns", "Clean Code", "Modularity"]
    },
    {
      name: "Distributed Systems & Concurrency",
      category: "cs_core",
      level: "88%",
      badge: "Systems",
      description: "Multi-threaded programming, asynchronous message passing, distributed data access, and fault tolerance.",
      tags: ["Distributed Systems", "Multithreading", "Fault Tolerance"]
    }
  ],

  masterDocxUrl: `${PUBLIC_URL}/docs/Sagar_S_Master_Projects_HLD_LLD_Specifications.docx`,

  projects: [
    {
      id: "ai-qa-operating-system",
      title: "AI QA Operating System (AQOS)",
      subtitle: "Enterprise Multi-Agent AI Platform",
      category: "Agentic AI & Multi-Agent",
      poster: aqosPoster,
      localPoster: "aqos_project.jpg",
      badge: "SAGARCHALAT ORIGINAL • #1 INNOVATION IN AI",
      rating: "99% Match",
      year: "2025",
      duration: "Enterprise Platform",
      docxUrl: `${PUBLIC_URL}/docs/AQOS_HLD_LLD_Architecture_Design.docx`,
      docxName: "AQOS_HLD_LLD_Architecture_Design.docx",
      tech: ["Python", "FastAPI", "LangChain", "RAG", "PostgreSQL", "Vector DB", "Docker", "Kubernetes", "GCP"],
      summary:
        "Conceived and designed an enterprise AI quality-engineering platform as a personal project, then presented the concept internally at STL Digital, where it grew into a production initiative with active engineering collaboration.",
      highlights: [
        "Conceived and designed an enterprise AI quality-engineering platform, leading its technical architecture and implementation.",
        "Played a lead role in designing a multi-agent AI architecture that automates requirement analysis, test planning, execution, defect triage, root-cause analysis, and release reporting through coordinated AI agents.",
        "Built RAG pipelines using vector embeddings and semantic search to give the agents reliable access to enterprise knowledge.",
        "Developed FastAPI microservices exposing REST APIs for requirement ingestion, orchestration, execution tracking, reporting, and AI workflow integration.",
        "Designed the backend architecture integrating AI agents with enterprise systems through modular, tool-callable APIs that support autonomous workflows.",
        "Utilized PostgreSQL and vector databases for structured application data, embeddings, and semantic document retrieval.",
        "Containerized services with Docker and supported scalable Kubernetes deployments on Google Cloud Platform."
      ],
      github: "https://github.com/sagarchalat",
      architecture: "Requirement Ingestion -> Orchestration Agent -> Multi-Agent Swarm (Analysis, Test Gen, Execution, Defect Triage) -> RAG Vector DB -> Tool-Callable APIs -> Kubernetes on GCP",
      hld: {
        topology: [
          { name: "Ingestion & API Gateway", tech: "FastAPI + OpenAPI", role: "Receives user stories, Jira tickets, and test specifications" },
          { name: "Orchestration Engine", tech: "LangChain StateGraph", role: "Decomposes goals, dispatches sub-agents, manages workflow state" },
          { name: "Specialized Agents", tech: "Claude / GPT-4o / LLaMA", role: "Requirement Analysis, Test Generation, Sandbox Execution, Defect Triage" },
          { name: "Enterprise RAG Engine", tech: "ChromaDB + FAISS", role: "Grounded semantic retrieval across corporate knowledge bases" },
          { name: "Cloud Infrastructure", tech: "GKE + Docker + GCP", role: "Autoscaling container pods with zero-downtime rolling releases" }
        ],
        dataflow: [
          "1. Requirements Ingestion: User submits PRD / Jira issue via `/api/v1/requirements/ingest`.",
          "2. Vector Indexing: Document chunks are embedded with dense vector representations.",
          "3. Goal Decomposition: Orchestrator assigns sub-goals to Analysis, Test Gen, and Triage agents.",
          "4. Autonomous Execution: Agents invoke tool-callable APIs in isolated Docker sandboxes.",
          "5. Semantic RCA: Failed tests are analyzed against historic defects in FAISS to generate root-cause reports."
        ],
        scalability: "Stateless FastAPI instances orchestrated on Kubernetes with Horizontal Pod Autoscaler (HPA) based on CPU/memory and queue depth."
      },
      lld: {
        classes: [
          { name: "AQOSOrchestrator", responsibility: "Manages state graph, delegates subtasks, evaluates agent stop conditions" },
          { name: "RequirementAnalyzer", responsibility: "Parses acceptance criteria, identifies negative test scenarios and edge cases" },
          { name: "TestGenerator", responsibility: "Synthesizes executable PyTest/Jest code with AST syntax validation" },
          { name: "DefectTriager", responsibility: "Computes cosine distance with historical defects in vector database" }
        ],
        endpoints: [
          { method: "POST", path: "/api/v1/requirements/ingest", desc: "Ingests PRD or Jira story for agent decomposition" },
          { method: "POST", path: "/api/v1/orchestrator/execute", desc: "Dispatches multi-agent workflow for automated QA" },
          { method: "GET", path: "/api/v1/workflows/{id}/status", desc: "Real-time SSE / polling status of active agents" },
          { method: "GET", path: "/api/v1/defects/{id}/rca", desc: "Retrieves root-cause analysis and suggested code patch" }
        ],
        database: [
          { table: "requirements", columns: "id (UUID), title, raw_content, status, created_at" },
          { table: "test_suites", columns: "id (UUID), req_id, generated_code, framework, version" },
          { table: "defects", columns: "id (UUID), run_id, error_signature, root_cause, severity" },
          { table: "embeddings", columns: "id (UUID), doc_type, content, embedding VECTOR(1536)" }
        ]
      }
    },
    {
      id: "enterprise-rag-chatbot",
      title: "Enterprise RAG Chatbot",
      subtitle: "Grounded Knowledge Retrieval Platform",
      category: "Generative AI & LLMs",
      poster: ragPoster,
      localPoster: "rag_chatbot.jpg",
      badge: "SAGARCHALAT ORIGINAL • HIGH ACCURACY",
      rating: "98% Match",
      year: "2025",
      duration: "Production Ready",
      docxUrl: `${PUBLIC_URL}/docs/Enterprise_RAG_Chatbot_HLD_LLD.docx`,
      docxName: "Enterprise_RAG_Chatbot_HLD_LLD.docx",
      tech: ["Python", "LangChain", "FAISS", "FastAPI", "Google Cloud", "OpenAI"],
      summary:
        "An intelligent enterprise document retrieval chatbot engineered with state-of-the-art Retrieval-Augmented Generation (RAG) architecture.",
      highlights: [
        "Built intelligent document retrieval chatbot utilizing advanced RAG architecture and chunking strategies.",
        "Implemented high-accuracy semantic search using dense vector embeddings and FAISS vector index.",
        "Grounded LLM responses in real enterprise knowledge with fast retrieval latencies.",
        "Deployed with FastAPI and containerized on Google Cloud Platform with streaming LLM token responses."
      ],
      github: "https://github.com/sagarchalat",
      architecture: "Document Parser -> Recursive Text Splitter -> Dense Embeddings -> FAISS Vector DB -> Hybrid Retriever -> Prompt Template -> LLM Engine -> Streaming FastAPI Endpoint",
      hld: {
        topology: [
          { name: "Document Ingestion", tech: "PyMuPDF + Unstructured", role: "Extracts text and tabular content from multi-format docs" },
          { name: "Embedding Pipeline", tech: "text-embedding-3-large", role: "Embeds chunks into 1536-dimensional vector representations" },
          { name: "Vector Index Store", tech: "FAISS IndexHNSWFlat", role: "Dense nearest-neighbor index with sub-10ms query times" },
          { name: "Reranker Module", tech: "Cross-Encoder / Cohere", role: "Re-scores top-50 vector candidates for precision filtering" },
          { name: "Response Generation", tech: "LangChain LCEL + FastAPI", role: "Injects grounded context into prompts and streams tokens" }
        ],
        dataflow: [
          "1. Query Tokenization: User prompt is normalized and passed to the embedding model.",
          "2. Dense Vector Retrieval: FAISS retrieves top-50 semantically similar document chunks.",
          "3. Cross-Encoder Reranking: Chunks are re-ranked based on lexical and contextual relevance.",
          "4. Context Injection: Top-5 chunks are injected into a strict grounding prompt template.",
          "5. Streaming Output: LLM generates streaming tokens via asynchronous FastAPI generator."
        ],
        scalability: "Horizontal read-replicas of FAISS index in memory with Redis semantic caching for frequent queries."
      },
      lld: {
        classes: [
          { name: "DocumentChunker", responsibility: "Recursive sliding window chunking with header boundary awareness" },
          { name: "FAISSSearchEngine", responsibility: "Manages dense vector index, cosine similarity searches, and metadata filtering" },
          { name: "CrossEncoderReranker", responsibility: "Pairs query with candidate passages to compute deep semantic relevance" },
          { name: "StreamingChatService", responsibility: "Async generator yielding server-sent event (SSE) token chunks" }
        ],
        endpoints: [
          { method: "POST", path: "/api/v1/chat/stream", desc: "Streams grounded answers token-by-token with source citations" },
          { method: "POST", path: "/api/v1/documents/upload", desc: "Uploads enterprise PDF/DOCX files for chunking and indexing" },
          { method: "GET", path: "/api/v1/index/stats", desc: "Returns indexed document counts, vector dimensions, and memory usage" }
        ],
        database: [
          { table: "documents", columns: "id (UUID), filename, file_hash, total_chunks, created_at" },
          { table: "document_chunks", columns: "id (UUID), doc_id, chunk_index, text_content, token_count" },
          { table: "chat_sessions", columns: "id (UUID), user_id, message_history (JSONB), last_active" }
        ]
      }
    },
    {
      id: "llm-fine-tuning-pipeline",
      title: "LLM Fine-Tuning Pipeline",
      subtitle: "Parameter-Efficient Domain Adaptation",
      category: "Large Language Models",
      poster: llmPoster,
      localPoster: "llm_finetune.jpg",
      badge: "SAGARCHALAT ORIGINAL • DEEP LEARNING",
      rating: "97% Match",
      year: "2025",
      duration: "Deep Learning",
      docxUrl: `${PUBLIC_URL}/docs/LLM_Fine_Tuning_Pipeline_HLD_LLD.docx`,
      docxName: "LLM_Fine_Tuning_Pipeline_HLD_LLD.docx",
      tech: ["PyTorch", "Hugging Face", "LoRA", "PEFT", "Transformers", "CUDA"],
      summary:
        "End-to-end distributed fine-tuning pipeline for open-source LLMs on custom domain datasets using parameter-efficient adaptation.",
      highlights: [
        "Fine-tuned open-source LLMs (LLaMA, Mistral) on custom enterprise datasets for domain adaptation.",
        "Applied Low-Rank Adaptation (LoRA) and QLoRA 4-bit quantization, drastically decreasing VRAM overhead.",
        "Built automated evaluation workflows and benchmarking pipelines measuring perplexity, BLEU, and human-aligned metrics.",
        "Packaged model weights and LoRA adapters for optimized GPU inference."
      ],
      github: "https://github.com/sagarchalat",
      architecture: "Domain Dataset -> Tokenizer -> 4-bit Quantization (BitsAndBytes) -> LoRA Adapters Injection -> PyTorch Training Loop -> Weights & Biases Logging -> Model Registry",
      hld: {
        topology: [
          { name: "Data Preprocessing", tech: "Pandas + Hugging Face Datasets", role: "Cleanses, formats, and tokenizes domain training datasets" },
          { name: "Model Quantization", tech: "BitsAndBytes NF4", role: "Quantizes 16-bit model weights down to 4-bit, saving 75% VRAM" },
          { name: "Adapter Layer Injection", tech: "PEFT + LoRA", role: "Freezes base weights, trains low-rank rank-16 adapter matrices" },
          { name: "Distributed Trainer", tech: "PyTorch FSDP + DeepSpeed", role: "Manages distributed multi-GPU training gradients and checkpointing" },
          { name: "Automated Evaluation", tech: "Ragas + Perplexity Evaluator", role: "Benchmarks fine-tuned model against baseline across domain KPIs" }
        ],
        dataflow: [
          "1. Instruction Formatting: Raw data is converted to ShareGPT prompt-completion tuples.",
          "2. Tokenization & Padding: Token sequences are packed to max context length (4096).",
          "3. QLoRA Adapter Forward Pass: Base model frozen in 4-bit; gradients computed only on LoRA matrices.",
          "4. Loss Optimization: Cross-entropy loss computed over target response tokens.",
          "5. Adapter Checkpoint: Saved adapter weights merged with base model or exported to GCS registry."
        ],
        scalability: "Data parallelism via PyTorch Fully Sharded Data Parallel (FSDP) scaling across GPU clusters."
      },
      lld: {
        classes: [
          { name: "DatasetCurator", responsibility: "Deduplicates, sanitizes PII, and applies instruction prompt formatting" },
          { name: "LoRAModelBuilder", responsibility: "Injects trainable low-rank adapters into attention projection layers" },
          { name: "TrainingSupervisor", responsibility: "Executes cosine learning rate scheduler, gradient accumulation, and logging" },
          { name: "ModelBenchmarkSuite", responsibility: "Runs ROUGE-L, BLEU, and perplexity evaluations on holdout validation split" }
        ],
        endpoints: [
          { method: "POST", path: "/api/v1/finetune/start", desc: "Launches a fine-tuning job with target base model and dataset config" },
          { method: "GET", path: "/api/v1/finetune/{job_id}/metrics", desc: "Streams training loss, learning rate, and evaluation perplexity" },
          { method: "POST", path: "/api/v1/finetune/{job_id}/export", desc: "Merges LoRA adapter weights and exports GGUF/HF artifacts" }
        ],
        database: [
          { table: "training_jobs", columns: "id (UUID), base_model, dataset_uri, status, epochs, vram_usage" },
          { table: "checkpoints", columns: "id (UUID), job_id, step, train_loss, eval_loss, artifact_uri" },
          { table: "model_benchmarks", columns: "id (UUID), model_version, bleu_score, rouge_score, perplexity" }
        ]
      }
    },
    {
      id: "mlops-deployment-pipeline",
      title: "MLOps Deployment Pipeline",
      subtitle: "Automated Cloud-Native CI/CD",
      category: "Cloud & DevOps",
      poster: mlopsPoster,
      localPoster: "mlops_pipeline.jpg",
      badge: "SAGARCHALAT ORIGINAL • CLOUD NATIVE",
      rating: "96% Match",
      year: "2025",
      duration: "Enterprise Scale",
      docxUrl: `${PUBLIC_URL}/docs/MLOps_Deployment_Pipeline_HLD_LLD.docx`,
      docxName: "MLOps_Deployment_Pipeline_HLD_LLD.docx",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "GCP", "FastAPI"],
      summary:
        "Robust enterprise MLOps platform automating model training, testing, artifact tracking, packaging, and zero-downtime deployment.",
      highlights: [
        "Designed and implemented end-to-end CI/CD pipelines for training, testing, and continuous model deployment.",
        "Integrated MLflow for comprehensive experiment tracking, parameter logging, and production model registry.",
        "Automated model versioning and built instant deployment rollback triggers preventing breaking releases.",
        "Reduced overall model deployment cycle time through continuous containerized workflows."
      ],
      github: "https://github.com/sagarchalat",
      architecture: "Git Push -> GitHub Actions CI -> Unit & Model Tests -> Docker Build -> Container Registry -> Kubernetes Rolling Update -> MLflow Tracking -> Automated Health Check",
      hld: {
        topology: [
          { name: "Continuous Integration", tech: "GitHub Actions", role: "Runs automated unit tests, model verification, and linting on PR" },
          { name: "Model Registry", tech: "MLflow + GCS", role: "Versioned repository for model weights, metrics, and lineage tracking" },
          { name: "Containerization", tech: "Docker Multi-stage", role: "Builds ultra-lean (<250MB) container image with CUDA dependencies" },
          { name: "Cluster Orchestration", tech: "GKE + Helm Charts", role: "Automates rolling zero-downtime canary deployments on Kubernetes" },
          { name: "Observability", tech: "Prometheus + Grafana", role: "Monitors p99 latency, input feature drift, and container health" }
        ],
        dataflow: [
          "1. Git Commit: Developer commits model inference code or updated weights.",
          "2. CI Automation: GitHub Actions executes pytest suites and validates model outputs.",
          "3. Image Publishing: Multi-stage Docker build pushes verified image to Google Artifact Registry.",
          "4. Canary Deployment: Helm updates 10% of GKE traffic to the new model container.",
          "5. Automated Rollback: If 5xx error rate exceeds 0.5%, traffic automatically reverts to previous deployment."
        ],
        scalability: "Cluster autoscaler with GPU-enabled node pools scaling based on request queue backlog."
      },
      lld: {
        classes: [
          { name: "CIWorkflowManager", responsibility: "Executes linting, dependency auditing, and model accuracy assertions" },
          { name: "MLflowArtifactPublisher", responsibility: "Packages model artifacts, signatures, and environment YAML files" },
          { name: "CanaryDeployer", responsibility: "Adjusts Kubernetes ingress weights and monitors canary health metrics" },
          { name: "TelemetryExporter", responsibility: "Streams real-time prediction latencies and hardware utilization to Prometheus" }
        ],
        endpoints: [
          { method: "POST", path: "/api/v1/models/deploy", desc: "Initiates canary deployment of a registered model version" },
          { method: "POST", path: "/api/v1/models/rollback", desc: "Forces immediate rollback to previous stable production version" },
          { method: "GET", path: "/api/v1/health/liveness", desc: "Kubernetes liveness probe endpoint checking GPU & memory health" }
        ],
        database: [
          { table: "deployments", columns: "id (UUID), model_version, image_digest, status, deployed_at" },
          { table: "audit_logs", columns: "id (UUID), deployment_id, action, triggered_by, status_code" }
        ]
      }
    },
    {
      id: "naruto-ai-voice-assistant",
      title: "Naruto AI Voice Assistant",
      subtitle: "Speech Recognition & NLP System",
      category: "Audio AI & Voice",
      poster: null,
      badge: "COMMUNITY FAVORITE",
      rating: "95% Match",
      year: "2024",
      duration: "Interactive Voice",
      docxUrl: `${PUBLIC_URL}/docs/Naruto_AI_Voice_Assistant_HLD_LLD.docx`,
      docxName: "Naruto_AI_Voice_Assistant_HLD_LLD.docx",
      tech: ["Python", "Speech Recognition", "Voice Synthesis", "NLP"],
      summary:
        "An AI voice assistant inspired by Naruto, built to comprehend voice commands and respond with real-time synthesized speech.",
      highlights: [
        "Real-time voice processing and custom keyword spotting engine.",
        "Integrated NLP reasoning engine to parse intent and execute system commands.",
        "Dynamic character voice personality synthesis."
      ],
      github: "https://github.com/sagarchalat/Naruto-AI-Voice-Assistant/tree/main",
      architecture: "Audio Input -> Acoustic Model / Speech-to-Text -> Intent Classifier -> Response Synthesis -> Text-to-Speech Output",
      hld: {
        topology: [
          { name: "Wake Word Listener", tech: "Keyword Spotting (KWS)", role: "Continuously listens for wake trigger with low power consumption" },
          { name: "Speech-to-Text (STT)", tech: "Whisper / SpeechRecognition", role: "Converts captured audio buffer into clean text transcription" },
          { name: "Intent Classifier", tech: "NLP Intent Engine", role: "Classifies user command (e.g. launch app, web search, answer query)" },
          { name: "Voice Synthesizer", tech: "Neural TTS / pyttsx3", role: "Generates expressive audio response with persona styling" }
        ],
        dataflow: [
          "1. Continuous Listening: Microphone stream monitored for wake word trigger.",
          "2. Audio Capture: Utterance buffer captured with voice activity detection (VAD).",
          "3. Acoustic Transcription: Speech-to-text converts raw PCM audio into tokens.",
          "4. Intent Resolution: Action dispatched (system utility, search, or dialog).",
          "5. Speech Playback: Audio generated and played back through output speaker."
        ],
        scalability: "Local client-side execution with optional cloud endpoint fallback for complex LLM reasoning."
      },
      lld: {
        classes: [
          { name: "AudioStreamListener", responsibility: "Manages microphone input buffer and Voice Activity Detection (VAD)" },
          { name: "SpeechRecognizerEngine", responsibility: "Interprets acoustic signals and converts into structured text" },
          { name: "IntentRouter", responsibility: "Maps extracted intent to corresponding execution handler or system command" },
          { name: "VoiceSynthesizer", responsibility: "Generates audio waveforms and routes to sound hardware" }
        ],
        endpoints: [],
        database: []
      }
    },
    {
      id: "deepfake-detection",
      title: "Deepfake Detection Using Deep Learning",
      subtitle: "Facial Artifact & Anomaly Analysis",
      category: "Computer Vision",
      poster: null,
      badge: "TOP ACCURACY",
      rating: "95% Match",
      year: "2024",
      duration: "Computer Vision",
      docxUrl: `${PUBLIC_URL}/docs/Deepfake_Detection_HLD_LLD.docx`,
      docxName: "Deepfake_Detection_HLD_LLD.docx",
      tech: ["PyTorch", "OpenCV", "CNNs", "Facial Landmark Detection"],
      summary:
        "Advanced deep learning computer vision model engineered to analyze facial artifacts and detect AI-synthesized deepfake videos.",
      highlights: [
        "Deep convolutional neural network architecture trained on frame-by-frame facial biological features.",
        "High-precision detection of temporal discrepancies and unnatural facial warping in synthetic video streams.",
        "Robust real-time frame extraction and heat-map anomaly visualization."
      ],
      github: "https://github.com/sagarchalat/deepfake_detection_using_deeplearning/tree/my-new-branch",
      architecture: "Video Frames -> Face Extraction (MTCNN) -> Feature Extraction (ResNet / CNN) -> Temporal LSTM / Classifier -> Deepfake Probability Output",
      hld: {
        topology: [
          { name: "Frame Extractor", tech: "OpenCV VideoCapture", role: "Extracts video frames at 30 fps with uniform temporal sampling" },
          { name: "Face Detector", tech: "MTCNN / Dlib Landmarks", role: "Detects, crops, and normalizes facial bounding boxes (224x224)" },
          { name: "Spatial Feature Network", tech: "ResNet-50 / EfficientNet", role: "Captures micro-texture inconsistencies and boundary blending artifacts" },
          { name: "Temporal Sequence Model", tech: "Bi-directional LSTM", role: "Evaluates cross-frame biological consistency (blinking, eye movement)" },
          { name: "Classification Head", tech: "Dense + Sigmoid", role: "Generates composite probability score and Grad-CAM anomaly heatmaps" }
        ],
        dataflow: [
          "1. Video Decoding: MP4 video ingested and split into sequenced RGB frames.",
          "2. Facial Alignment: MTCNN isolates facial regions, eliminating background noise.",
          "3. Spatial Embedding: ResNet-50 computes 2048-dimensional feature vectors per frame.",
          "4. Temporal Evaluation: Bi-LSTM processes frame embeddings across time windows.",
          "5. Output Scoring: Probability calculated; Grad-CAM visualizes manipulation hot spots."
        ],
        scalability: "Batched GPU inference using PyTorch TensorRT supporting multi-threaded video stream processing."
      },
      lld: {
        classes: [
          { name: "VideoFrameSampler", responsibility: "Decodes video file and extracts keyframes at specified sampling intervals" },
          { name: "FacialRegionExtractor", responsibility: "Detects 68 facial landmarks and aligns crops to standard orientation" },
          { name: "SpatialTemporalDetector", responsibility: "Deep neural network combining CNN feature backbone with LSTM temporal layers" },
          { name: "HeatmapVisualizer", responsibility: "Generates Grad-CAM overlays highlighting synthetic tampering regions" }
        ],
        endpoints: [],
        database: []
      }
    }
  ],

  certifications: [
    {
      title: "Programming with Python Professional Certificate",
      issuer: "OpenEDG",
      badge: "Professional Certificate",
      color: "#306998",
      description: "Advanced Python semantics, OOP, algorithms, data structures, and production-grade software engineering."
    },
    {
      title: "Machine Learning Statistical Foundations",
      issuer: "Wolfram",
      badge: "Professional Certificate",
      color: "#DD1100",
      description: "Advanced statistical theory, hypothesis testing, probability distributions, and mathematical foundations of ML."
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft",
      badge: "Professional Certificate",
      color: "#00A4EF",
      description: "Generative AI models, prompt design, ethical AI principles, and enterprise GenAI application architectures."
    },
    {
      title: "Java Foundations",
      issuer: "JetBrains",
      badge: "Professional Certificate",
      color: "#6e40c9",
      description: "Core Java, object-oriented principles, JVM internals, memory management, and enterprise software foundations."
    }
  ]
};

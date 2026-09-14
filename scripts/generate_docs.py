import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "docs")
os.makedirs(OUTPUT_DIR, exist_ok=True)

def set_cell_background(cell, hex_color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def style_heading(p, text, color=RGBColor(229, 9, 20), size=Pt(16)):
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(6)
    run = p.add_run(text)
    run.font.name = "Calibri"
    run.font.size = size
    run.font.bold = True
    run.font.color.rgb = color

def add_header(doc, title, subtitle, author="Sagar S — Agentic AI Engineer", date="September 2026"):
    # Title
    t_para = doc.add_paragraph()
    t_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    t_run = t_para.add_run(title)
    t_run.font.name = "Calibri"
    t_run.font.size = Pt(24)
    t_run.font.bold = True
    t_run.font.color.rgb = RGBColor(229, 9, 20)

    # Subtitle
    s_para = doc.add_paragraph()
    s_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    s_run = s_para.add_run(subtitle)
    s_run.font.name = "Calibri"
    s_run.font.size = Pt(13)
    s_run.font.italic = True
    s_run.font.color.rgb = RGBColor(80, 80, 80)

    # Meta
    m_para = doc.add_paragraph()
    m_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    m_run = m_para.add_run(f"Author: {author}  |  Date: {date}  |  Confidentiality: Technical Portfolio Document")
    m_run.font.name = "Calibri"
    m_run.font.size = Pt(9.5)
    m_run.font.color.rgb = RGBColor(120, 120, 120)

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

def create_table(doc, headers, data):
    table = doc.add_table(rows=len(data) + 1, cols=len(headers))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True

    # Header Row
    hdr_cells = table.rows[0].cells
    for i, h in enumerate(headers):
        hdr_cells[i].text = h
        set_cell_background(hdr_cells[i], "1E1E1E")
        for p in hdr_cells[i].paragraphs:
            for r in p.runs:
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)
                r.font.size = Pt(10)

    # Data Rows
    for r_idx, row in enumerate(data):
        row_cells = table.rows[r_idx + 1].cells
        bg_color = "F7F7F7" if r_idx % 2 == 0 else "FFFFFF"
        for c_idx, val in enumerate(row):
            row_cells[c_idx].text = str(val)
            set_cell_background(row_cells[c_idx], bg_color)
            for p in row_cells[c_idx].paragraphs:
                for r in p.runs:
                    r.font.size = Pt(9.5)
                    r.font.color.rgb = RGBColor(40, 40, 40)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

# --------------------------------------------------------------------------------------------------
# PROJECT 1: AQOS (AI QA Operating System)
# --------------------------------------------------------------------------------------------------
def generate_aqos_doc():
    doc = Document()
    add_header(doc, 
               "AI QA Operating System (AQOS)", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer (STL Digital)")

    # 1. Executive Summary
    style_heading(doc.add_paragraph(), "1. Executive Summary & Problem Statement")
    doc.add_paragraph(
        "Modern enterprise software engineering requires rapid iteration cycles, but traditional QA workflows suffer "
        "from disconnected test planning, manual defect triage, delayed root-cause analysis, and siloed requirements. "
        "The AI QA Operating System (AQOS) is an enterprise-grade autonomous multi-agent platform designed to automate "
        "the entire quality-engineering lifecycle. Developed with Python, FastAPI, LangChain, RAG, PostgreSQL, and vector stores, "
        "and deployed on Kubernetes over Google Cloud Platform (GCP), AQOS coordinates specialized AI agents that collaborate "
        "over a shared corporate knowledge base to analyze requirements, generate test plans, execute automated tests, triage defects, "
        "and draft release readiness reports."
    )

    # 2. High-Level Design (HLD)
    style_heading(doc.add_paragraph(), "2. High-Level Design (HLD)")
    doc.add_paragraph(
        "AQOS adopts an Event-Driven Multi-Agent Microservice Architecture. The system decomposes complex QA responsibilities "
        "into specialized autonomous agents governed by a centralized Orchestration Engine."
    )

    style_heading(doc.add_paragraph(), "2.1 System Architecture Topology", color=RGBColor(30, 30, 30), size=Pt(13))
    create_table(doc, ["Component Layer", "Technologies", "Responsibility"], [
        ["Ingestion Gateway", "FastAPI, OpenAPI, AsyncIO", "Receives PRDs, user stories, Jira tickets, and test specifications"],
        ["Orchestrator Agent", "LangChain StateGraph, ReAct", "Decomposes goals, delegates tasks to sub-agents, manages workflow state"],
        ["Analysis Agent", "HuggingFace, Claude/GPT-4o", "Parses user requirements, extracts edge cases, verifies acceptance criteria"],
        ["Test Generation Agent", "Python AST, PyTest Generators", "Creates automated unit, integration, and E2E regression test scripts"],
        ["Execution Agent", "Docker Sandboxes, PyTest, K8s Jobs", "Runs tests in isolated ephemeral containers, captures logs and stack traces"],
        ["Defect Triage Agent", "FAISS Vector DB, Semantic Rerank", "Matches errors against past incidents, identifies root causes, assigns severity"],
        ["Enterprise RAG Engine", "ChromaDB, FAISS, PostgreSQL", "Grounds agent decisions in historical Jira issues, codebase docs, and test specs"],
        ["Deployment Infrastructure", "Docker, Kubernetes (GKE), GCP", "Autoscaling container pods, horizontal pod autoscaling (HPA), zero-downtime"]
    ])

    style_heading(doc.add_paragraph(), "2.2 End-to-End Data Flow Architecture", color=RGBColor(30, 30, 30), size=Pt(13))
    doc.add_paragraph(
        "1. Ingestion: A new feature PRD or Jira ticket is posted to `/api/v1/requirements/ingest`.\n"
        "2. Embedding & Grounding: The document is chunked and embedded via dense embeddings into the vector database.\n"
        "3. Requirement Analysis: The Orchestrator triggers the Analysis Agent to extract test scenarios and boundary conditions.\n"
        "4. Test Script Synthesis: The Test Gen Agent generates executable PyTest suites with mocked external dependencies.\n"
        "5. Containerized Execution: The Execution Agent spins up an isolated Kubernetes Job to run test suites and record telemetry.\n"
        "6. Defect Triage & RCA: Failures are analyzed by the Defect Triage Agent using semantic search over past error knowledge bases.\n"
        "7. Reporting: Comprehensive execution summaries and release readiness scores are published to stakeholders via REST webhooks."
    )

    # 3. Low-Level Design (LLD)
    style_heading(doc.add_paragraph(), "3. Low-Level Design (LLD)")
    doc.add_paragraph(
        "The Low-Level Design specifies the object models, database schemas, and FastAPI REST endpoint contracts."
    )

    style_heading(doc.add_paragraph(), "3.1 Core Class & Module Architecture", color=RGBColor(30, 30, 30), size=Pt(13))
    create_table(doc, ["Class / Interface", "Methods", "Description"], [
        ["AQOSOrchestrator", "plan_workflow(), dispatch_agent(), evaluate_state()", "Central coordinator implementing the LangChain state machine"],
        ["RequirementAnalyzer", "extract_entities(), identify_edge_cases()", "Parses raw text into structured scenario models"],
        ["TestGenerator", "synthesize_code(), validate_syntax()", "Generates and lints automated test scripts with AST validation"],
        ["SandboxExecutor", "launch_job(), stream_logs(), cleanup()", "Manages ephemeral Docker/K8s test execution sandboxes"],
        ["DefectTriager", "vector_search_rca(), compute_severity()", "Calculates cosine similarity with historical bugs in FAISS"],
        ["RAGKnowledgeStore", "hybrid_search(), rerank_results()", "Retrieves grounded context from PostgreSQL + FAISS vector index"]
    ])

    style_heading(doc.add_paragraph(), "3.2 Database Schema (PostgreSQL + pgvector)", color=RGBColor(30, 30, 30), size=Pt(13))
    create_table(doc, ["Table Name", "Primary Columns", "Indexes & Foreign Keys"], [
        ["requirements", "id (UUID), title, raw_content, status, created_at", "PRIMARY KEY (id), INDEX (status)"],
        ["test_suites", "id (UUID), req_id, generated_code, framework, version", "FOREIGN KEY (req_id) REFERENCES requirements(id)"],
        ["execution_runs", "id (UUID), suite_id, passed, failed, duration_ms, logs", "FOREIGN KEY (suite_id) REFERENCES test_suites(id)"],
        ["defects", "id (UUID), run_id, error_signature, root_cause, severity", "FOREIGN KEY (run_id) REFERENCES execution_runs(id)"],
        ["knowledge_embeddings", "id (UUID), doc_type, content, embedding (VECTOR(1536))", "HNSW INDEX ON embedding USING vector_cosine_ops"]
    ])

    style_heading(doc.add_paragraph(), "3.3 REST API Endpoint Contracts", color=RGBColor(30, 30, 30), size=Pt(13))
    create_table(doc, ["Method & Path", "Request Body / Params", "Response Payload"], [
        ["POST /api/v1/requirements/ingest", "{ 'title': str, 'description': str, 'project_key': str }", "{ 'requirement_id': UUID, 'status': 'PROCESSING' }"],
        ["POST /api/v1/orchestrator/execute", "{ 'requirement_id': UUID, 'auto_triage': bool }", "{ 'workflow_id': UUID, 'state': 'DISPATCHED' }"],
        ["GET /api/v1/workflows/{workflow_id}/status", "Path: workflow_id (UUID)", "{ 'state': str, 'current_agent': str, 'progress_pct': int }"],
        ["GET /api/v1/defects/{defect_id}/rca", "Path: defect_id (UUID)", "{ 'root_cause': str, 'confidence': float, 'suggested_fix': str }"]
    ])

    path = os.path.join(OUTPUT_DIR, "AQOS_HLD_LLD_Architecture_Design.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# PROJECT 2: Enterprise RAG Chatbot
# --------------------------------------------------------------------------------------------------
def generate_rag_doc():
    doc = Document()
    add_header(doc, 
               "Enterprise RAG Chatbot Platform", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer")

    style_heading(doc.add_paragraph(), "1. Executive Summary")
    doc.add_paragraph(
        "The Enterprise RAG Chatbot is an intelligent document retrieval platform engineered to eliminate hallucinations "
        "and provide authoritative, source-attributed answers from vast repositories of unstructured corporate documents. "
        "Featuring dense vector embeddings, FAISS indexing, hybrid BM25 lexical reranking, and streaming FastAPI REST APIs "
        "deployed on Google Cloud, the system achieved a 25% improvement in retrieval accuracy and sub-100ms first-token latency."
    )

    style_heading(doc.add_paragraph(), "2. High-Level Design (HLD)")
    create_table(doc, ["Subsystem", "Component", "Functionality"], [
        ["Document Processing", "PyMuPDF, Unstructured, Recursive Splitter", "Extracts text, preserves tables, applies semantic chunking with overlap"],
        ["Embedding Engine", "text-embedding-3-large / HuggingFace", "Transforms text chunks into normalized 1536-dimensional vectors"],
        ["Vector Index Store", "FAISS IndexHNSWFlat, PostgreSQL metadata", "Billion-scale dense nearest-neighbor search with sub-10ms query times"],
        ["Reranking Service", "Cohere Rerank / Cross-Encoder", "Re-scores top-50 vector candidates to extract top-5 high-relevance chunks"],
        ["Generation Engine", "LangChain LCEL, Streaming LLM", "Injects grounded context into prompt templates and streams tokens to frontend"],
        ["Observability & Cache", "Redis, OpenTelemetry, Prometheus", "Semantic response caching, token usage tracking, and latency metrics"]
    ])

    style_heading(doc.add_paragraph(), "3. Low-Level Design (LLD)")
    doc.add_paragraph(
        "Chunking Strategy: Dynamic sliding window with 512 tokens and 64 token overlap, respecting markdown header and paragraph boundaries. "
        "Cosine similarity threshold set at 0.82 for initial filtering."
    )

    create_table(doc, ["Class / Function", "Parameters", "Return Value"], [
        ["DocumentChunker.chunk()", "raw_doc: Document, chunk_size=512, overlap=64", "List[Chunk]"],
        ["FAISSVectorStore.similarity_search()", "query_embedding: List[float], k=20", "List[ScoredDocument]"],
        ["CrossEncoderReranker.rerank()", "query: str, candidates: List[Document], top_n=5", "List[Document]"],
        ["StreamingRAGService.generate_stream()", "session_id: str, query: str, context: List[Document]", "AsyncGenerator[str, None]"]
    ])

    path = os.path.join(OUTPUT_DIR, "Enterprise_RAG_Chatbot_HLD_LLD.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# PROJECT 3: LLM Fine-Tuning Pipeline
# --------------------------------------------------------------------------------------------------
def generate_finetune_doc():
    doc = Document()
    add_header(doc, 
               "LLM Fine-Tuning Pipeline", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer")

    style_heading(doc.add_paragraph(), "1. Executive Summary")
    doc.add_paragraph(
        "The LLM Fine-Tuning Pipeline is an end-to-end distributed training and domain-adaptation platform for open-source "
        "Large Language Models (LLaMA-3, Mistral, Gemma). Leveraging PyTorch, Hugging Face Transformers, BitsAndBytes 4-bit "
        "quantization, and Low-Rank Adaptation (LoRA/QLoRA), the pipeline enables cost-effective model adaptation on single or "
        "multi-GPU setups with automated benchmark evaluation."
    )

    style_heading(doc.add_paragraph(), "2. High-Level Design (HLD)")
    create_table(doc, ["Pipeline Stage", "Tools & Frameworks", "Key Specifications"], [
        ["Data Curation", "Pandas, Datasets, Regex, De-duplication", "Instruction-response formatting (Alpaca/ShareGPT schemas)"],
        ["Quantization", "BitsAndBytes (NF4, Double Quantization)", "Reduces 16-bit model weights to 4-bit, saving 75% GPU VRAM"],
        ["Adapter Injection", "PEFT, LoRA (r=16, alpha=32, target_modules)", "Freezes base model, injects trainable low-rank matrices"],
        ["Distributed Training", "PyTorch FSDP, DeepSpeed Stage 2/3, FlashAttention-2", "Accelerates training throughput by 2.4x on NVIDIA A100s"],
        ["Evaluation & Metrics", "Ragas, BLEU, ROUGE, Perplexity, G-Eval", "Automated validation suites measuring domain accuracy vs. base model"]
    ])

    style_heading(doc.add_paragraph(), "3. Low-Level Design (LLD)")
    doc.add_paragraph(
        "LoRA Mathematical Foundation: W_new = W_0 + (alpha / r) * (W_A @ W_B), where W_0 is frozen (d x k), "
        "W_A is Gaussian initialized (r x k), and W_B is zero initialized (d x r). Rank r=16, alpha=32."
    )

    path = os.path.join(OUTPUT_DIR, "LLM_Fine_Tuning_Pipeline_HLD_LLD.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# PROJECT 4: MLOps Deployment Pipeline
# --------------------------------------------------------------------------------------------------
def generate_mlops_doc():
    doc = Document()
    add_header(doc, 
               "MLOps Deployment Pipeline", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer")

    style_heading(doc.add_paragraph(), "1. Executive Summary")
    doc.add_paragraph(
        "The MLOps Deployment Pipeline is a cloud-native CI/CD automation platform designed for rapid, safe, and observable "
        "deployments of machine learning workloads. Built using Docker, Kubernetes, GitHub Actions, MLflow, and Google Cloud, "
        "the system reduced release cycle time by 40% while ensuring automated rollback capabilities and real-time inference monitoring."
    )

    style_heading(doc.add_paragraph(), "2. High-Level Design (HLD)")
    create_table(doc, ["Phase", "Infrastructure", "Operations"], [
        ["Continuous Integration", "GitHub Actions, PyTest, Flake8", "Triggered on git push; runs unit tests, contract tests, and linting"],
        ["Model Registry & Tracking", "MLflow Server, Google Cloud Storage (GCS)", "Logs model artifacts, hyperparameters, ROC/AUC, and production promotion"],
        ["Container Build & Scan", "Docker Multi-stage, Google Artifact Registry", "Produces minimal runtime image (<250MB), scans vulnerabilities with Trivy"],
        ["Orchestration & Deploy", "Google Kubernetes Engine (GKE), Helm", "Rolling zero-downtime canary deployment with horizontal pod autoscaler"],
        ["Continuous Monitoring", "Prometheus, Grafana, OpenTelemetry", "Tracks p99 inference latency, memory pressure, and input data drift"]
    ])

    path = os.path.join(OUTPUT_DIR, "MLOps_Deployment_Pipeline_HLD_LLD.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# PROJECT 5: Naruto AI Voice Assistant
# --------------------------------------------------------------------------------------------------
def generate_naruto_doc():
    doc = Document()
    add_header(doc, 
               "Naruto AI Voice Assistant", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer")

    style_heading(doc.add_paragraph(), "1. Executive Summary")
    doc.add_paragraph(
        "The Naruto AI Voice Assistant is an interactive voice-driven agent designed with real-time speech recognition, "
        "natural language understanding (NLU), and neural text-to-speech synthesis (TTS). Designed with a custom wake-word engine "
        "and personality persona reasoning, the assistant parses user intents and executes operating system tasks."
    )

    style_heading(doc.add_paragraph(), "2. Architecture & Pipeline")
    create_table(doc, ["Module", "Technology", "Description"], [
        ["Wake-Word Detection", "Porcupine / Custom Keyword Spotting", "Low-power listening loop trigger"],
        ["Speech-to-Text (STT)", "Whisper / SpeechRecognition", "Converts acoustic waveforms into clean token streams"],
        ["Intent Classifier & NLU", "Python, LangChain, Rule-based & LLM", "Parses user commands (apps, weather, search, conversations)"],
        ["Text-to-Speech (TTS)", "pyttsx3 / Coqui TTS", "Synthesizes expressive response audio with low latency"]
    ])

    path = os.path.join(OUTPUT_DIR, "Naruto_AI_Voice_Assistant_HLD_LLD.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# PROJECT 6: Deepfake Detection Using Deep Learning
# --------------------------------------------------------------------------------------------------
def generate_deepfake_doc():
    doc = Document()
    add_header(doc, 
               "Deepfake Detection Using Deep Learning", 
               "High-Level Design (HLD) & Low-Level Design (LLD) Architectural Specification", 
               "Sagar S — Agentic AI Engineer")

    style_heading(doc.add_paragraph(), "1. Executive Summary")
    doc.add_paragraph(
        "This project implements a computer vision deep learning pipeline for detecting synthetic facial manipulation and deepfakes "
        "in high-resolution videos and images. By combining spatial Convolutional Neural Networks (CNNs) with temporal sequence "
        "models (LSTM / Bi-LSTM), the model detects subtle boundary artifacts, blinking irregularities, and frequency domain anomalies."
    )

    style_heading(doc.add_paragraph(), "2. Architecture & Pipeline")
    create_table(doc, ["Pipeline Stage", "Algorithm / Model", "Purpose"], [
        ["Frame Extraction", "OpenCV VideoCapture", "Extracts 30 fps video frames with dynamic sampling"],
        ["Face Alignment", "MTCNN / Dlib 68 Facial Landmarks", "Crops and aligns facial bounding boxes at 224x224 resolution"],
        ["Spatial Feature Extraction", "ResNet-50 / EfficientNet-B4", "Captures blending boundary artifacts and color inconsistency"],
        ["Temporal Analysis", "Bi-directional LSTM / GRU", "Evaluates cross-frame biological consistency (eye blinks, lip sync)"],
        ["Classification Head", "Dense layer + Sigmoid activation", "Outputs deepfake probability score with Grad-CAM heatmap"]
    ])

    path = os.path.join(OUTPUT_DIR, "Deepfake_Detection_HLD_LLD.docx")
    doc.save(path)
    print(f"Saved: {path}")

# --------------------------------------------------------------------------------------------------
# MASTER DOCUMENT
# --------------------------------------------------------------------------------------------------
def generate_master_doc():
    doc = Document()
    add_header(doc, 
               "Master Portfolio Architecture Specifications", 
               "Complete High-Level Design (HLD) & Low-Level Design (LLD) Suite for All AI/ML Projects", 
               "Sagar S — Agentic AI Engineer")

    doc.add_paragraph(
        "This master architectural compendium contains the complete system design specifications, high-level architectures, "
        "component topologies, database schemas, API contracts, and algorithm specifications for all projects developed by Sagar S."
    )

    sections = [
        ("1. AI QA Operating System (AQOS) — Enterprise Multi-Agent AI Platform", 
         "Autonomous multi-agent platform for requirements parsing, test generation, containerized execution, defect triage, and enterprise RAG grounding on Kubernetes and GCP."),
        ("2. Enterprise RAG Chatbot Platform", 
         "Production-ready Retrieval-Augmented Generation system with dense FAISS indexing, cross-encoder reranking, and sub-100ms streaming responses."),
        ("3. LLM Fine-Tuning Pipeline", 
         "Distributed parameter-efficient domain adaptation platform using PyTorch, LoRA, QLoRA, and BitsAndBytes 4-bit quantization."),
        ("4. MLOps Deployment Pipeline", 
         "Cloud-native CI/CD automation with Docker, Kubernetes, MLflow, and GitHub Actions, delivering zero-downtime canary releases."),
        ("5. Naruto AI Voice Assistant", 
         "Acoustic keyword spotting, intent classification, and low-latency speech synthesis voice agent."),
        ("6. Deepfake Detection Using Deep Learning", 
         "Spatial-temporal computer vision pipeline with MTCNN, ResNet, and Bi-LSTM detecting synthetic media manipulations.")
    ]

    for title, desc in sections:
        style_heading(doc.add_paragraph(), title, size=Pt(14))
        doc.add_paragraph(desc)

    path = os.path.join(OUTPUT_DIR, "Sagar_S_Master_Projects_HLD_LLD_Specifications.docx")
    doc.save(path)
    print(f"Saved: {path}")

if __name__ == "__main__":
    generate_aqos_doc()
    generate_rag_doc()
    generate_finetune_doc()
    generate_mlops_doc()
    generate_naruto_doc()
    generate_deepfake_doc()
    generate_master_doc()
    print("All 7 DOCX specifications generated successfully!")

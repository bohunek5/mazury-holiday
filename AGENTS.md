# 🤖 AGENTS.MD — MAZURY HOLIDAY

Ten plik służy jako zewnętrzny mózg (Project Context) dla agentów AI omija zbędne tłumaczenia i dostarcza precyzyjne reguły pracy nad projektem Mazury Holiday.

---

## 🏗️ ARCHITECTURE & TECH STACK
- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI (Glassmorphism based)
- **Animations**: Framer Motion (premium scroll-stop-builder patterns)
- **Icons**: Lucide React
- **Intelligence**: Integrated AI Assistant (engine in `src/utils/aiAssistantEngine.ts`)

## 🧬 BUSINESS CONTEXT
- **Goal**: Marketplace dla luksusowych noclegów na Mazurach (Stranda, Fuleda, Kisajno, Skorupki).
- **KPI**: Rezerwacje przez chat (Lead Generation) + FAQ.
- **Budget**: ~2000zł (MVP -> Pro Phase).

## 🎨 DESIGN SYSTEM (THE MAKER DNA)
- **Colors**: Primary Amber-500 (#f59e0b) to Orange-600 (#ea580c).
- **Vibe**: 2026-level tech aesthetic, high contrast, frosted glass surfaces.
- **Rules**: 
  - Używaj `-webkit-backdrop-filter` dla pełnej kompatybilności Safari.
  - Zachowuj 3D "Neural Thinking" animacje w asystencie.

## 🕹️ AI ASSISTANT RULES
- **Intent Detection**: System musi wykrywać zapytania o "rezerwację", "wolny termin" i "dostępność".
- **Lead Capture**: Gdy wykryto intent rezerwacji, agent musi zebrać: (1) Datę, (2) Liczbę osób, (3) Lokalizację.
- **Tone**: Pomocny, luksusowy, proaktywny, ale nienachalny (Zosia Voice-Style).

## 📂 FILE MAPPING
- `/src/components/AiAssistant.tsx`: Główny widget czatu.
- `/src/utils/aiAssistantEngine.ts`: Logika odpowiedzi (rules + pattern matching).
- `/src/data/*`: Baza produktów (apartamenty, łodzie, domki).

---
*Created by Antigravity - follow these rules without exception.*

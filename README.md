# PublyFi Web (Next.js 14 + Tailwind + ESLint/Prettier)

Scalable foundation for a Web3 social-gaming platform: streams, quests, marketplace, DAO.

## Tech
- Next.js 14 (App Router)
- TypeScript, TailwindCSS
- ESLint + Prettier
- Lucide icons
- Clean, modular structure for future streaming, blockchain wallet, marketplace integrations

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure
```
app/                # App Router pages
components/         # UI components
lib/                # Config and helpers
public/             # Static files
tailwind.config.ts  # Theme
```

## Next Steps
- Integrate react-three-fiber or Unity WebGL into the Hero stage
- Add auth & profiles
- Connect Wallet (e.g., wagmi/viem) and Immutable zkEVM later
- Build Marketplace & DAO flows

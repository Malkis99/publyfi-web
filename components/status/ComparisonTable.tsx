'use client';
import { motion, Variants, Transition } from 'framer-motion';
import { Check, X, HelpCircle } from 'lucide-react';

const TABLE_DATA = {
  headers: ['Feature', 'Free', 'Prime', 'Pro', 'VIP'],
  rows: [
    { feature: 'Streams & Content', values: ['check', 'check', 'check', 'question'] },
    { feature: 'Profile Customization', values: ['Basic', 'Advanced', 'Advanced + Pro-only', 'question'] },
    { feature: 'Quests & Rewards', values: ['x', 'x', 'check', 'question'] },
    { feature: 'Weekly Case', values: ['x', 'check', 'check', 'question'] },
    { feature: 'Monthly Case', values: ['x', 'x', 'check', 'question'] },
    { feature: 'Marketplace Visibility', values: ['x', 'check', 'check', 'question'] },
    { feature: 'DAO Voting Power', values: ['x', 'x', 'check', 'question'] },
    { feature: 'Seasonal Leaderboards', values: ['x', 'x', 'check', 'question'] },
    { feature: 'Access Type', values: ['Free', 'One-time', 'Monthly', 'question'] },
  ],
  auras: {
    Free: 'rgba(156, 163, 175, 0.3)', // gray-400
    Prime: 'rgba(0, 206, 209, 0.4)', // DarkTurquoise
    Pro: 'rgba(216, 180, 254, 0.4)', // purple-300
    VIP: 'rgba(255, 215, 0, 0.4)', // gold
  },
};

const getIcon = (value: string) => {
  switch (value) {
    case 'check':
      return <Check className="w-5 h-5 text-green-400" />;
    case 'x':
      return <X className="w-5 h-5 text-red-400" />;
    case 'question':
      return <HelpCircle className="w-5 h-5 text-yellow-400" />;
    default:
      return <span className="text-sm text-gray-300">{value}</span>;
  }
};

export const ComparisonTable = () => {
  const transition: Transition = {
    duration: 0.6,
    delay: 0.8,
    ease: "easeOut"
  };

  const tableVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition
    }
  };

  return (
    <motion.div
      variants={tableVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-[400px]"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Feature Comparison
      </h2>
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-white/5">
            <tr>
              {TABLE_DATA.headers.map((header, i) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: TABLE_DATA.auras[header as keyof typeof TABLE_DATA.auras] || 'white',
                    textShadow: `0 0 8px ${TABLE_DATA.auras[header as keyof typeof TABLE_DATA.auras] || 'transparent'}`
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {TABLE_DATA.rows.map((row, rowIndex) => (
              <motion.tr
                key={row.feature}
                className="hover:bg-white/5 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + rowIndex * 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{row.feature}</td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-start">{getIcon(value)}</div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
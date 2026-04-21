import { motion } from 'motion/react';

export default function LiveTicker() {
  return (
    <div className="bg-white border-b border-gray-100 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center whitespace-nowrap">
        <span className="flex items-center px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase rounded mr-4 animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5" />
          Live
        </span>
        
        <motion.div 
          className="flex space-x-12 text-sm font-bold text-brand-navy"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <span>LTICC vs. Bedford CC | Score: 185/4 (35 overs)</span>
          <span className="text-gray-300">|</span>
          <span>NEXT MATCH: vs. Dunstable CC in 3 Days 14 Hrs 25 Mins</span>
          <span className="text-gray-300">|</span>
          <span>LADIES XI: Win by 8 wickets vs Flitwick CC</span>
          <span className="text-gray-300">|</span>
          <span>YOUTH REGISTRATION: Now Open for Summer 2026</span>
        </motion.div>
      </div>
    </div>
  );
}

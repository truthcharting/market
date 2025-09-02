import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { BarChart3, FileText, Target, DollarSign, Users, TrendingUp } from 'lucide-react';
// @ts-ignore
import winningLogo from './images/WINNING LOGO UPDATE (2).png';

export default function App() {
  const [activeTab, setActiveTab] = useState('market');

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-stone-900 to-neutral-900 text-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={winningLogo} 
                  alt="Truth Charting Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Truth Charting
                </h1>
                <p className="text-sm text-gray-400">Market Analysis & Partnership Proposal</p>
              </div>
            </div>
            
            <div className="flex bg-white/5 rounded-full p-1">
              <button
                onClick={() => setActiveTab('market')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                  activeTab === 'market' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Market Size
              </button>
              <button
                onClick={() => setActiveTab('proposal')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                  activeTab === 'proposal' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                Investment Proposal
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'market' ? <MarketSizeTab /> : <InvestmentProposalTab />}
      </div>
    </div>
  );
}

function MarketSizeTab() {
  const participationRates = [
    { label: 'Historical Benchmark', year: '(CARA, 2011)', rate: '79%', description: 'of parishes had youth ministries' },
    { label: 'Conservative 2024 Estimate', year: '', rate: '60%', description: '(accounting for declining participation trends)' },
    { label: 'Optimistic 2024 Estimate', year: '', rate: '70%', description: '(partial recovery post-COVID)' }
  ];

  const marketCalculations = [
    { scenario: 'Historical (79%)', parishes: '12,851 parishes', marketSize: '$15,267,588' },
    { scenario: 'Conservative (60%)', parishes: '9,760 parishes', marketSize: '$11,594,880' },
    { scenario: 'Optimistic (70%)', parishes: '11,387 parishes', marketSize: '$13,527,756' }
  ];

  const lifeteenBenchmark = [
    { scenario: 'Conservative (60%)', parishes: '9,760', marketSize: '$85,400,000' },
    { scenario: 'Moderate (70%)', parishes: '11,387', marketSize: '$99,636,250' },
    { scenario: 'Historical (79%)', parishes: '12,851', marketSize: '$112,446,250' }
  ];

  return (
    <div className="space-y-8">
      {/* Youth Ministry Participation Rates */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Youth Ministry Participation Rates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participationRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-3xl text-orange-400 mb-2">{rate.rate}</div>
                <div className="text-white mb-1">{rate.label}</div>
                <div className="text-sm text-gray-400">{rate.year}</div>
                <div className="text-sm text-gray-300 mt-2">{rate.description}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Market Calculations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Market Calculations</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 text-gray-300">Scenario</th>
                  <th className="text-center py-4 text-gray-300">Parish Count</th>
                  <th className="text-center py-4 text-gray-300">Potential Market Size</th>
                </tr>
              </thead>
              <tbody>
                {marketCalculations.map((calc, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="py-4 text-white">{calc.scenario}</td>
                    <td className="py-4 text-center text-orange-300">{calc.parishes}</td>
                    <td className="py-4 text-center text-green-300 text-lg">{calc.marketSize}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-400 italic">
            Based on $1,188/year curriculum cost
          </div>
        </Card>
      </motion.section>

      {/* Market Reality Check */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Market Reality Check: Lifeteen Analysis</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg text-orange-300 mb-4">Lifeteen Performance Metrics:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="text-sm text-gray-300">Active in</div>
                <div className="text-xl text-white">~1,600 parishes</div>
                <div className="text-xs text-gray-400">(9.8% of total parishes)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="text-sm text-gray-300">2023 Revenue</div>
                <div className="text-xl text-green-300">$14,000,000</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="text-sm text-gray-300">Average Revenue per Parish</div>
                <div className="text-xl text-orange-300">$8,750</div>
              </div>
            </div>
          </div>

          <h3 className="text-lg text-orange-300 mb-4">Revised Market Projections Using Lifeteen Benchmark</h3>
          <p className="text-gray-300 mb-4">If we apply Lifeteen's $8,750 average revenue per parish across different penetration scenarios:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 text-gray-300">Scenario</th>
                  <th className="text-center py-4 text-gray-300">Active Parishes</th>
                  <th className="text-center py-4 text-gray-300">Total Market Size</th>
                </tr>
              </thead>
              <tbody>
                {lifeteenBenchmark.map((benchmark, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="py-4 text-white">{benchmark.scenario}</td>
                    <td className="py-4 text-center text-orange-300">{benchmark.parishes}</td>
                    <td className="py-4 text-center text-green-300 text-lg">{benchmark.marketSize}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.section>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/30">
                      <div className="text-center">
              <div className="text-2xl text-white mb-4">
                Total Market Opportunity: <span className="text-orange-300">$20M - $112M</span>
              </div>
            <div className="text-gray-300 max-w-3xl mx-auto">
              Using Lifeteen's proven revenue model as a benchmark, the Catholic youth curriculum market 
              represents a substantial opportunity significantly larger than initial conservative estimates.
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

function InvestmentProposalTab() {
  const benefits = {
    formed: [
      'Exclusive youth curriculum differentiator',
      'Revenue from TC standalone subscriptions',
      'Strengthened parish relationships through enhanced youth programming'
    ],
    truthCharting: [
      '$500k production capital for premium content creation',
      'Access to FORMED\'s 5,000+ parish network',
      'Dual revenue streams (direct + FORMED royalties)'
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
          Truth Charting Youth Series Partnership Proposal
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Customer Experience Structure */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Customer Experience Structure</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg text-orange-300 mb-4">Dual Distribution Model:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-orange-400 text-orange-300">Standalone</Badge>
                </div>
                <p className="text-gray-300">
                  <strong>Standalone Option:</strong> Direct Truth Charting subscription ($99/month per parish)
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-blue-400 text-blue-300">FORMED</Badge>
                </div>
                <p className="text-gray-300">
                  <strong>FORMED Integration:</strong> Included as feature within existing FORMED parish subscriptions
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Financial Partnership Framework */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Financial Partnership Framework</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-orange-300 mb-3">Initial Investment:</h3>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 p-4 rounded-lg">
                <div className="text-2xl text-white">$500,000 from FORMED</div>
                <div className="text-green-300">for Season 1-2 production</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-orange-300 mb-3">Revenue Sharing Structure:</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500">Phase 1</Badge>
                    <span className="text-white">Recoupment</span>
                  </div>
                  <p className="text-gray-300">FORMED receives 50% of standalone TC subscriptions until $500k investment is recovered</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-500">Phase 2</Badge>
                    <span className="text-white">Ongoing</span>
                  </div>
                  <p className="text-gray-300">FORMED receives 10% ongoing royalty from standalone subscriptions in perpetuity or equity in the company</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-500">Platform Revenue</Badge>
                  </div>
                  <p className="text-gray-300">Truth Charting receives $20 per parish per month for parishes accessing content through FORMED</p>
                  <p className="text-xs text-gray-400 mt-1">A formula can be derived based upon unique viewers if specific parish viewership data is not available.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Market Opportunity */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Market Opportunity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-orange-300 mb-2">Target Market</div>
              <div className="text-xl text-white">9,760-12,363 parishes</div>
              <div className="text-sm text-gray-400">with youth ministries</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-orange-300 mb-2">Revenue Potential</div>
              <div className="text-xl text-white">$20M-$112M</div>
              <div className="text-sm text-gray-400">market size</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="text-orange-300 mb-2">FORMED Benefit</div>
              <div className="text-xl text-white">Enhanced youth offering</div>
              <div className="text-sm text-gray-400">drives parish retention and new subscriptions</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
            <p className="text-blue-200">
              Parishes are incentivized to purchase Formed to obtain a bundle deal and get Truth Charting included
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Mutual Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Mutual Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg text-blue-300 mb-4">For FORMED:</h3>
              <ul className="space-y-3">
                {benefits.formed.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-orange-300 mb-4">For Truth Charting:</h3>
              <ul className="space-y-3">
                {benefits.truthCharting.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Success Metrics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/30">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl text-white">Success Metrics</h2>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-2xl text-white mb-2">
              Year 1 Target: <span className="text-orange-300">500 parishes</span> across both platforms
            </div>
            <div className="text-lg text-green-300">
              Projected Combined Revenue: <span className="text-white">$600K+ annually</span>
            </div>
          </div>

          <div className="border-t border-orange-400/30 pt-6">
            <p className="text-gray-300 text-center max-w-4xl mx-auto">
              This structure maintains business independence while creating sustainable mutual benefit through the 
              content's success on both platforms.
            </p>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}
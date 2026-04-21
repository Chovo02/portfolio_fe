'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { motion } from 'framer-motion'

interface MetricsData {
  accuracy?: number
  precision?: number
  recall?: number
  f1Score?: number
  auc?: number
  rmse?: number
  mae?: number
  r2Score?: number
}

interface ProjectMetricsProps {
  metrics?: MetricsData
  performanceData?: Array<{ name: string; value: number }>
  timelineData?: Array<{ week: string; accuracy: number; loss: number }>
}

const chartColors = ['#d71921', '#f1f1f1', '#888888', '#2a2d30']

export function ProjectMetrics({ metrics, performanceData, timelineData }: ProjectMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Key Metrics Cards */}
      {metrics && Object.keys(metrics).length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(metrics).map(([key, value]) => {
            const percentage = Math.round(value * 100)
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-secondary/50 border border-border rounded-lg p-4 text-center backdrop-blur-sm"
              >
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  {percentage}%
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {/* Performance Distribution */}
      {performanceData && performanceData.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-secondary/50 border border-border rounded-lg p-6 backdrop-blur-sm"
        >
          <h3 className="text-sm font-mono tracking-widest uppercase mb-4 text-foreground">
            Distribuzione Performance
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {performanceData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor: '#1b1d1f',
                  border: '1px solid #2a2d30',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#f1f1f1' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {performanceData.map((item, index) => (
              <div key={item.name} className="text-center text-sm">
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: chartColors[index % chartColors.length] }}
                />
                <div className="text-muted-foreground">{item.name}</div>
                <div className="font-mono font-bold text-foreground">{item.value}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Timeline Chart */}
      {timelineData && timelineData.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary/50 border border-border rounded-lg p-6 backdrop-blur-sm"
        >
          <h3 className="text-sm font-mono tracking-widest uppercase mb-4 text-foreground">
            Andamento nel Tempo
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2d30" />
              <XAxis dataKey="week" stroke="#888888" />
              <YAxis stroke="#888888" domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1b1d1f',
                  border: '1px solid #2a2d30',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#f1f1f1' }}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#d71921"
                strokeWidth={2}
                dot={{ fill: '#d71921', r: 4 }}
                activeDot={{ r: 6 }}
                name="Accuratezza"
              />
              <Line
                type="monotone"
                dataKey="loss"
                stroke="#888888"
                strokeWidth={2}
                dot={{ fill: '#888888', r: 4 }}
                activeDot={{ r: 6 }}
                name="Loss"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}
    </motion.div>
  )
}

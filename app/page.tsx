"use client"

import {Twitter, Instagram, Infinity as InfinityIcon, Github, ExternalLink } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-gray-400 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-16">
        {/* Logo and Theme Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <InfinityIcon className="w-8 h-8 text-white/80" />
            <span className="text-gray-200 font-medium">Abde</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-100">
            Building the future,
            <br />
            one product at a time.
          </h1>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://github.com/abdemohamett", icon: Github },
            { href: "https://twitter.com/abdemohamett", icon: Twitter },
            { href: "https://instagram.com/abdemett", icon: Instagram },
          ].map((social) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5" />
              <span className="sr-only">Visit {social.href}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {[
            {
              title: "JuniAI",
              description: "AI-Powered Journaling Made Simple - Transform voice into beautiful journal entries",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              action: "View Project",
              href: "https://juniai.vercel.app",
              gradient: "from-[#1DB954] to-emerald-500"
            },
            {
              title: "Plannner",
              description: "Smart task management and planning application",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              action: "View Project",
              href: "https://plannner.vercel.app",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              title: "MagicPost",
              description: "Transform YouTube videos into LinkedIn posts",
              icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
              action: "View Project",
              href: "https://trymagicpost.vercel.app",
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              title: "ChapterMind",
              description: "AI-powered timestamp generator for video content",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              action: "View Project",
              href: "http://chaptermind.vercel.app",
              gradient: "from-orange-500 to-red-500"
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:bg-zinc-800/50 transition-all duration-300">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                        className="w-6 h-6 text-white"
                    stroke="currentColor"
                  >
                    <path
                          d={card.icon}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                    />
                  </svg>
                </div>
                <div>
                      <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {card.description}
              </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                    className="text-gray-400 hover:text-white"
                asChild
                  >
                    <Link href={card.href}>
                      <span className="mr-2">{card.action}</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
            </div>
          </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 pt-8"
        >
          <p>© 2024 Abde Mohamett • Built with Next.js</p>
        </motion.div>
      </div>
    </div>
  )
}
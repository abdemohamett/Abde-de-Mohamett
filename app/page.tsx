"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, ExternalLink, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Component() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Abde de Mohamett
            </span>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild>
                <Link href="mailto:contact@abdemohamett.com">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Building the future of
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Full-stack developer specializing in creating innovative solutions and transformative web applications
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://twitter.com/abdemohamett" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://instagram.com/abdemett" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abde-mohamett-5919b0274/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">MagicPost</CardTitle>
                  <Badge variant="secondary">Beta</Badge>
                </div>
                <CardDescription>Transform YouTube videos into LinkedIn posts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/m.png"
                    alt="MagicPost website screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  MagicPost is an AI app that transforms YouTube videos into LinkedIn posts in seconds, allowing you to repurpose content and
                  grow your network efficiently.
                </p>
                <Button asChild>
                  <Link href="https://trymagicpost.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">ChapterMind</CardTitle>
                <CardDescription>AI Powered TimeStamp generator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/c.png"
                    alt="ChapterMind website screenshot"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  ChapterMind is a modern platform designed to enhance the learning experience through interactive chapters and comprehensive
                  content management. It aims to revolutionize online education.
                </p>
                <Button asChild>
                  <Link href="http://chaptermind.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2024 Abdirahman Mohamett. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
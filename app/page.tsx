"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Sparkles,
  Download,
  Moon,
  Sun,
  Palette,
  Type,
  ImageIcon,
  Zap,
  Brain,
  Star,
  Copy,
  Check,
  Target,
  Cpu,
  Shield,
  Atom,
  Circle,
  Square,
  Hexagon,
  Diamond,
  Leaf,
  Layers,
  Orbit,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Enhanced brand name generation
const generateSmartBrandNames = (idea: string) => {
  const words = idea
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2)
  const brandNames = new Set()

  const techPrefixes = [
    "Neo",
    "Meta",
    "Ultra",
    "Prime",
    "Apex",
    "Vertex",
    "Zenith",
    "Quantum",
    "Digital",
    "Smart",
    "Cyber",
    "Next",
    "Future",
    "Advanced",
    "Elite",
    "Pro",
    "Max",
    "Super",
    "Hyper",
    "Mega",
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Omega",
    "Flux",
    "Nova",
    "Stellar",
    "Cosmic",
    "Infinite",
  ]

  const techSuffixes = [
    "AI",
    "Tech",
    "Labs",
    "Core",
    "Flow",
    "Sync",
    "Hub",
    "Pro",
    "X",
    "IQ",
    "Logic",
    "Mind",
    "Brain",
    "Genius",
    "Wise",
    "Smart",
    "Plus",
    "Max",
    "Prime",
    "Elite",
    "Sphere",
    "Verse",
    "Wave",
    "Link",
    "Bridge",
    "Path",
    "Quest",
    "Forge",
    "Craft",
    "Works",
    "Studio",
    "Space",
  ]

  words.forEach((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)

    techPrefixes.slice(0, 10).forEach((prefix) => {
      brandNames.add(`${prefix}${capitalizedWord}`)
    })

    techSuffixes.slice(0, 15).forEach((suffix) => {
      brandNames.add(`${capitalizedWord}${suffix}`)
    })
  })

  if (words.length >= 2) {
    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      const word2 = words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1)
      brandNames.add(`${word1}${word2}`)
      brandNames.add(`${word1}${word2}AI`)
      brandNames.add(`${word1}${word2}Pro`)
    }
  }

  return Array.from(brandNames)
    .slice(0, 12)
    .map((name) => ({
      name,
      category: detectCategory(idea),
      popularity: Math.floor(Math.random() * 15) + 85,
      relevance: Math.floor(Math.random() * 30) + 70,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 8)
}

const generateSmartSlogans = (idea: string) => {
  const templates = [
    "Transforming Tomorrow with Intelligence",
    "Where Innovation Meets Excellence",
    "The Future of Smart Solutions",
    "Powering Next-Generation Technology",
    "Intelligence Redefined",
    "Beyond Limits, Beyond Possible",
    "Smart Solutions, Smarter Future",
    "Innovation in Every Pixel",
  ]
  return templates.slice(0, 6)
}

const detectCategory = (idea: string) => {
  const lowerIdea = idea.toLowerCase()

  if (lowerIdea.includes("ai") || lowerIdea.includes("tech") || lowerIdea.includes("software")) return "AI/Tech"
  if (lowerIdea.includes("health") || lowerIdea.includes("medical") || lowerIdea.includes("fitness"))
    return "Healthcare"
  if (lowerIdea.includes("finance") || lowerIdea.includes("money") || lowerIdea.includes("payment")) return "FinTech"
  if (lowerIdea.includes("education") || lowerIdea.includes("learning") || lowerIdea.includes("school")) return "EdTech"
  if (lowerIdea.includes("food") || lowerIdea.includes("restaurant") || lowerIdea.includes("delivery"))
    return "Food/Delivery"

  return "Innovation"
}

const generateSmartColorPalettes = (idea: string) => {
  const category = detectCategory(idea)

  const palettes = {
    "AI/Tech": [
      { name: "Cyber Neon", colors: ["#0A0A0A", "#1A1A2E", "#16213E", "#0F3460", "#E94560"] },
      { name: "Neural Blue", colors: ["#0D1117", "#21262D", "#30363D", "#6366F1", "#8B5CF6"] },
      { name: "Quantum Matrix", colors: ["#000000", "#1F2937", "#374151", "#10B981", "#06D6A0"] },
      { name: "Digital Pulse", colors: ["#1E1B4B", "#3730A3", "#4F46E5", "#6366F1", "#8B5CF6"] },
    ],
    Healthcare: [
      { name: "Medical Trust", colors: ["#F8FAFC", "#E2E8F0", "#0EA5E9", "#0284C7", "#0C4A6E"] },
      { name: "Healing Green", colors: ["#F0FDF4", "#DCFCE7", "#22C55E", "#16A34A", "#14532D"] },
      { name: "Care Comfort", colors: ["#FEF7FF", "#F3E8FF", "#A855F7", "#7C3AED", "#581C87"] },
    ],
    FinTech: [
      { name: "Gold Standard", colors: ["#FFFBEB", "#FEF3C7", "#F59E0B", "#D97706", "#92400E"] },
      { name: "Trust Blue", colors: ["#EFF6FF", "#DBEAFE", "#3B82F6", "#1D4ED8", "#1E3A8A"] },
      { name: "Success Green", colors: ["#F0FDF4", "#DCFCE7", "#22C55E", "#16A34A", "#14532D"] },
    ],
    default: [
      { name: "Cosmic Gradient", colors: ["#1F2937", "#4F46E5", "#7C3AED", "#EC4899", "#F59E0B"] },
      { name: "Neon Dreams", colors: ["#0A0A0A", "#6366F1", "#8B5CF6", "#EC4899", "#F59E0B"] },
      { name: "Tech Fusion", colors: ["#000000", "#1F2937", "#10B981", "#06D6A0", "#00F5FF"] },
    ],
  }

  return palettes[category] || palettes.default
}

const generateLogoVariants = () => {
  return [
    { type: "Wordmark", description: "Typography-based logo", icon: Type, style: "text-based" },
    { type: "Symbol + Text", description: "Icon with brand name", icon: Cpu, style: "combined" },
    { type: "Monogram", description: "Stylized initials", icon: Circle, style: "initials" },
    { type: "Abstract Symbol", description: "Geometric mark", icon: Atom, style: "abstract" },
    { type: "Tech Badge", description: "Modern emblem", icon: Shield, style: "badge" },
    { type: "Minimal Icon", description: "Simple symbol", icon: Diamond, style: "minimal" },
    { type: "Neural Network", description: "Connected nodes", icon: Hexagon, style: "tech" },
    { type: "Organic Flow", description: "Natural design", icon: Leaf, style: "organic" },
    { type: "Geometric Grid", description: "Structured pattern", icon: Square, style: "geometric" },
  ]
}

export default function AIBrandKitGenerator() {
  const [isDark, setIsDark] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedBrands, setGeneratedBrands] = useState([])
  const [generatedSlogans, setGeneratedSlogans] = useState([])
  const [generatedPalettes, setGeneratedPalettes] = useState([])
  const [logoVariants, setLogoVariants] = useState([])
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedSlogan, setSelectedSlogan] = useState("")
  const [selectedPalette, setSelectedPalette] = useState(null)
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const handleGenerate = async () => {
    if (!searchQuery.trim()) return

    setIsGenerating(true)
    setShowResults(false)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    const brands = generateSmartBrandNames(searchQuery)
    const slogans = generateSmartSlogans(searchQuery)
    const palettes = generateSmartColorPalettes(searchQuery)
    const logos = generateLogoVariants()

    setGeneratedBrands(brands)
    setGeneratedSlogans(slogans)
    setGeneratedPalettes(palettes)
    setLogoVariants(logos)

    setSelectedBrand(brands[0])
    setSelectedSlogan(slogans[0])
    setSelectedPalette(palettes[0])

    setIsGenerating(false)
    setShowResults(true)
  }

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const exportToPDF = () => {
    if (!selectedBrand) return

    const content = `
AI BRAND KIT GENERATOR - PREMIUM EXPORT
=======================================

Original Idea: "${searchQuery}"
Category: ${selectedBrand.category}
Generated: ${new Date().toLocaleDateString()}

SELECTED BRAND NAME: ${selectedBrand.name}
SELECTED SLOGAN: "${selectedSlogan}"
SELECTED COLOR PALETTE: ${selectedPalette.name}

This premium brand kit was generated using advanced AI algorithms.
    `.trim()

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${selectedBrand.name.replace(/\s+/g, "-")}-brand-kit.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-1" />
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-2" />
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-float-3" />

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 text-purple-400/10">
          <Hexagon className="w-32 h-32 animate-spin-slow" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-cyan-400/10">
          <Atom className="w-24 h-24 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/2 text-pink-400/10">
          <Diamond className="w-20 h-20 animate-bounce-slow" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                  <Brain className="w-8 h-8 text-purple-300" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Neural
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Brand
                  </span>
                </h1>
                <p className="text-sm text-gray-400">AI Brand Generator</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsDark(!isDark)}
                variant="ghost"
                size="icon"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8">
            <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 rounded-full">
              <Sparkles className="w-5 h-5 mr-2" />
              AI-Powered Brand Intelligence
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
            <span className="text-white">AI Brand</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient">
              Generator
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-16 text-gray-300 leading-relaxed">
            Create stunning brand identities with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              neural-powered intelligence
            </span>
          </p>

          {/* Search Interface */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative p-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center space-x-6 p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                  <Search className="w-8 h-8 text-purple-300" />
                </div>

                <Input
                  placeholder="Describe your revolutionary startup idea..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent text-2xl text-white placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0"
                  onKeyPress={(e) => e.key === "Enter" && handleGenerate()}
                />

                <Button
                  onClick={handleGenerate}
                  disabled={!searchQuery.trim() || isGenerating}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-6 h-6 animate-spin" />
                      <span>Generating...</span>
                    </div>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6 mr-3" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Example Prompts */}
          {!showResults && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {[
                "AI-powered fitness app with personalized workouts",
                "Sustainable food delivery with carbon-neutral logistics",
                "VR language learning platform with AI tutors",
                "Blockchain finance platform with automated trading",
                "Mental health app with AI therapy chatbot",
                "Smart home automation with predictive energy management",
              ].map((example, index) => (
                <Button
                  key={example}
                  variant="outline"
                  onClick={() => setSearchQuery(example)}
                  className="p-4 h-auto text-left text-sm bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {example}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="relative z-40 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h2 className="text-4xl font-bold mb-4 text-white">Premium Brand Kit</h2>
                <p className="text-xl text-gray-300 mb-6">"{searchQuery}"</p>
                <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
                  <Badge className="px-4 py-2 bg-purple-500/20 text-purple-300 border-purple-400/30">
                    <Target className="w-4 h-4 mr-2" />
                    {selectedBrand?.category}
                  </Badge>
                  <Badge className="px-4 py-2 bg-green-500/20 text-green-300 border-green-400/30">
                    <Layers className="w-4 h-4 mr-2" />
                    {generatedBrands.length} Names
                  </Badge>
                  <Badge className="px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-400/30">
                    <Orbit className="w-4 h-4 mr-2" />
                    {logoVariants.length} Logos
                  </Badge>
                </div>
              </div>
            </div>

            {/* Export Button */}
            <div className="flex justify-end mb-12">
              <Button
                onClick={exportToPDF}
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Export Kit
              </Button>
            </div>

            <div className="grid xl:grid-cols-2 gap-12">
              {/* Brand Names */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold flex items-center text-white">
                  <Type className="w-8 h-8 mr-3 text-purple-500" />
                  Brand Names
                </h3>

                <div className="space-y-4">
                  {generatedBrands.map((brand, index) => (
                    <Card
                      key={brand.name}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 ${
                        selectedBrand?.name === brand.name ? "ring-2 ring-purple-500" : ""
                      }`}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-2xl font-bold text-white">{brand.name}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              copyToClipboard(brand.name, `brand-${brand.name}`)
                            }}
                            className="p-2 hover:bg-white/10"
                          >
                            {copiedStates[`brand-${brand.name}`] ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                            <Cpu className="w-4 h-4 mr-1" />
                            {brand.category}
                          </Badge>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm text-gray-300">{brand.popularity}%</span>
                            </div>
                            <div className="flex items-center">
                              <Target className="w-4 h-4 text-green-500 mr-1" />
                              <span className="text-sm text-gray-300">{brand.relevance}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Slogans */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold flex items-center text-white">
                  <Zap className="w-8 h-8 mr-3 text-yellow-500" />
                  Slogans
                </h3>

                <div className="space-y-4">
                  {generatedSlogans.map((slogan, index) => (
                    <Card
                      key={slogan}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 ${
                        selectedSlogan === slogan ? "ring-2 ring-yellow-500" : ""
                      }`}
                      onClick={() => setSelectedSlogan(slogan)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-medium text-white">"{slogan}"</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              copyToClipboard(slogan, `slogan-${index}`)
                            }}
                            className="p-2 hover:bg-white/10"
                          >
                            {copiedStates[`slogan-${index}`] ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Color Palettes */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center text-white">
                <Palette className="w-8 h-8 mr-3 text-pink-500" />
                Color Palettes
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generatedPalettes.map((palette, index) => (
                  <Card
                    key={palette.name}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 ${
                      selectedPalette?.name === palette.name ? "ring-2 ring-pink-500" : ""
                    }`}
                    onClick={() => setSelectedPalette(palette)}
                  >
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-white">{palette.name}</h4>
                      <div className="flex space-x-2 mb-4">
                        {palette.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-12 h-12 rounded-lg transition-transform hover:scale-110"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <div className="space-y-2">
                        {palette.colors.map((color, colorIndex) => (
                          <div key={colorIndex} className="flex justify-between items-center">
                            <span className="text-sm font-mono text-gray-300">{color}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                copyToClipboard(color, `color-${palette.name}-${colorIndex}`)
                              }}
                              className="p-1 hover:bg-white/10"
                            >
                              {copiedStates[`color-${palette.name}-${colorIndex}`] ? (
                                <Check className="w-3 h-3 text-green-500" />
                              ) : (
                                <Copy className="w-3 h-3 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Logo Variants */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center text-white">
                <ImageIcon className="w-8 h-8 mr-3 text-blue-500" />
                Logo Concepts
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {logoVariants.map((variant, index) => (
                  <Card
                    key={variant.type}
                    className="transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10"
                  >
                    <CardContent className="p-6">
                      <div className="w-full h-32 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <div className="text-center">
                          {variant.style === "text-based" ? (
                            <div>
                              <Type className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                              <p className="text-lg font-bold text-white">{selectedBrand?.name || "BrandName"}</p>
                            </div>
                          ) : variant.style === "initials" ? (
                            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold text-white mx-auto">
                              {(selectedBrand?.name || "BN").slice(0, 2).toUpperCase()}
                            </div>
                          ) : variant.style === "combined" ? (
                            <div className="flex items-center space-x-2">
                              <variant.icon className="w-10 h-10 text-purple-400" />
                              <p className="text-lg font-bold text-white">{selectedBrand?.name || "Brand"}</p>
                            </div>
                          ) : (
                            <variant.icon className="w-12 h-12 text-purple-400" />
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-semibold mb-2 text-white">{variant.type}</h4>
                        <p className="text-sm text-gray-400">{variant.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

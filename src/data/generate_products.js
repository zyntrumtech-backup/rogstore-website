import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define categories
const categories = [
  "Gaming PCs", "Custom PCs", "Laptops", "Processors", "Graphics Cards",
  "Motherboards", "RAM", "SSD", "HDD", "Power Supplies", "Cases",
  "CPU Coolers", "Gaming Monitors", "Mechanical Keyboards", "Gaming Mice",
  "Gaming Headsets", "Controllers", "Networking", "Printers", "Accessories"
];

// Helper to generate a realistic product list
const productsRaw = [
  // 1. Gaming PCs
  {
    id: "pc-ultimate-gaming",
    name: "ROG Hyperion Ultimate RTX 4090 Gaming Build",
    brand: "ROG",
    category: "Gaming PCs",
    price: 845000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "AMD Ryzen 9 7950X3D",
      GPU: "ASUS ROG Strix RTX 4090 24GB GDDR6X",
      Motherboard: "ASUS ROG Crosshair X670E Hero",
      RAM: "64GB G.Skill Trident Z5 RGB DDR5 6000MHz",
      Storage: "2TB Samsung 990 Pro PCIe 4.0 NVMe SSD",
      PowerSupply: "ROG Thor 1200W Platinum II",
      Chassis: "ASUS ROG Hyperion GR701",
      Cooler: "ROG Ryujin III 360 ARGB AIO"
    },
    description: "The ultimate powerhouse designed for the most demanding gamers and creators. Features the class-leading AMD Ryzen 9 7950X3D and NVIDIA's flagship RTX 4090 GPU inside the monstrous ROG Hyperion chassis.",
    highlights: [
      "Ultimate gaming performance at 4K resolution with ultra settings",
      "Next-generation ray tracing and AI-powered DLSS 3.0",
      "Advanced liquid cooling with ROG Ryujin III AIO",
      "Premium OLED display panel on the power supply showing live wattage"
    ]
  },
  {
    id: "pc-core-i7-standard",
    name: "ROG Strix Elite Core i7 Gaming PC",
    brand: "ROG",
    category: "Gaming PCs",
    price: 345000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "Intel Core i7-14700K",
      GPU: "MSI Ventus 3X RTX 4070 SUPER 12GB GDDR6X",
      Motherboard: "ASUS ROG Strix B760-F Gaming WiFi",
      RAM: "32GB Corsair Vengeance RGB DDR5 5600MHz",
      Storage: "1TB WD Black SN850X NVMe SSD",
      PowerSupply: "Corsair RM750e 750W 80+ Gold",
      Chassis: "NZXT H6 Flow RGB Black",
      Cooler: "DeepCool LT720 360mm Liquid Cooler"
    },
    description: "A perfect blend of high-end gaming performance and aesthetics. Excellent for high refresh-rate 1440p gaming and stream hosting.",
    highlights: [
      "Stunning 1440p gaming performance on modern AAA titles",
      "14th Gen Intel Core i7 processor with 20 cores",
      "Compact panoramic dual-chamber NZXT case",
      "High-speed PCIe 4.0 NVMe SSD for instant loading times"
    ]
  },
  {
    id: "pc-ryzen-5-budget",
    name: "Aero AMD Ryzen 5 Budget Gaming PC",
    brand: "Gigabyte",
    category: "Gaming PCs",
    price: 185000,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "AMD Ryzen 5 7600",
      GPU: "Gigabyte Eagle RTX 4060 8GB GDDR6",
      Motherboard: "Gigabyte B650M DS3H WiFi",
      RAM: "16GB Kingston FURY Beast DDR5 5200MHz",
      Storage: "1TB Lexar NM710 NVMe SSD",
      PowerSupply: "DeepCool PK650D 650W 80+ Bronze",
      Chassis: "Antec AX61 Elite RGB",
      Cooler: "AMD Wraith Stealth Stock"
    },
    description: "An affordable entryway into modern PC gaming. Leveraging the newer AM5 platform, this PC offers outstanding 1080p performance and an easy upgrade path.",
    highlights: [
      "Smooth 1080p Ultra and 1440p Medium gaming capabilities",
      "Equipped with RTX 4060 supporting Frame Generation",
      "Hassle-free future upgrade path with the AMD AM5 socket",
      "Built-in Dual-band WiFi and Bluetooth connectivity"
    ]
  },
  {
    id: "pc-creator-pro",
    name: "ROG Creator Edition workstation PC",
    brand: "ASUS",
    category: "Gaming PCs",
    price: 595000,
    availability: "pre_order",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1600541519463-ee359d9972c4?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "Intel Core i9-14900K",
      GPU: "ASUS ProArt RTX 4080 SUPER 16GB GDDR6X",
      Motherboard: "ASUS ProArt Z790-Creator WiFi",
      RAM: "64GB Corsair Vengeance DDR5 5600MHz",
      Storage: "2TB Samsung 990 Pro + 4TB WD Blue HDD",
      PowerSupply: "ASUS Prime 850W Gold ATX 3.0",
      Chassis: "ASUS ProArt PA602",
      Cooler: "ROG Strix LC III 360 ARGB"
    },
    description: "Designed strictly for digital artists, video editors, and game developers. The ProArt series prioritizes thermal performance, connectivity (Thunderbolt 4), and minimal noise levels.",
    highlights: [
      "Excellent workstation performance in Adobe suite, Blender, and Unreal Engine",
      "Thunderbolt 4 and 10Gb Ethernet for lightning-fast network transfers",
      "Minimalist ProArt black and gold visual theme",
      "High reliability component selection for long render cycles"
    ]
  },

  // 2. Custom PCs
  {
    id: "custom-dual-gpu-ai",
    name: "Dual RTX 4090 Deep Learning Node",
    brand: "MSI",
    category: "Custom PCs",
    price: 1450000,
    availability: "pre_order",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "AMD Ryzen Threadripper 7960X (24 Cores)",
      GPU: "2x MSI RTX 4090 Suprim Liquid X 24GB",
      Motherboard: "ASUS ProArt WRX90E-SAGE SE",
      RAM: "128GB G.Skill Zeta R5 DDR5 ECC RDIMM",
      Storage: "4TB Kingston KC3000 PCIe 4.0 NVMe",
      PowerSupply: "Super Flower Leadex 1600W Titanium",
      Chassis: "Lian Li V3000 Plus Full Tower",
      Cooler: "Custom Loop CPU + Dual Liquid GPUs"
    },
    description: "A custom-built compute powerhouse optimized for AI training, local LLM deployment, and high-fidelity rendering. Features dual liquid-cooled RTX 4090s and Threadripper processor.",
    highlights: [
      "Dual RTX 4090 layout providing 48GB VRAM compute capability",
      "Server-grade ECC memory for long computing tasks",
      "Threadripper platform supporting up to 128 PCIe Lanes",
      "Custom industrial liquid loop for sustained low thermals"
    ]
  },
  {
    id: "custom-hardline-red",
    name: "ROG Custom Hardline Crimson Build",
    brand: "ROG",
    category: "Custom PCs",
    price: 780000,
    availability: "pre_order",
    warranty: "2 Years Custom Loop Leak Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "AMD Ryzen 7 7800X3D",
      GPU: "ASUS ROG Strix RTX 4080 SUPER 16GB",
      Motherboard: "ROG Strix X670E-E Gaming WiFi",
      RAM: "32GB G.Skill Trident Z5 Neo RGB 6000MHz",
      Storage: "2TB Samsung 990 Pro",
      PowerSupply: "ROG Loki 850W SFX-L Platinum",
      Chassis: "Lian Li O11D EVO RGB",
      Cooler: "Custom EKWB Liquid Cooling Loop"
    },
    description: "A boutique, custom watercooled system. Complete with hardline PETG tubing, crimson red coolant, premium EKWB waterblocks, and custom sleeved cables.",
    highlights: [
      "Stunning custom-bent hardline liquid loop",
      "Optimal thermal dissipation for the best gaming CPU (7800X3D)",
      "Fully synchronized ROG Aura Sync RGB lighting",
      "Custom ROG-themed backplates and PSU cables"
    ]
  },
  {
    id: "custom-mini-itx",
    name: "ROG Strix Portable ITX Gaming Rig",
    brand: "ROG",
    category: "Custom PCs",
    price: 385000,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "Intel Core i5-14600K",
      GPU: "ASUS ROG Strix RTX 4070 Ti SUPER 16GB",
      Motherboard: "ASUS ROG Strix Z790-I Gaming WiFi",
      RAM: "32GB Corsair Dominator Titanium DDR5 6000MHz",
      Storage: "2TB Crucial T500 NVMe SSD",
      PowerSupply: "Corsair SF850 850W SFX Gold",
      Chassis: "Lian Li A4-H2O Mini-ITX Case",
      Cooler: "ROG Ryuo III 240 ARGB"
    },
    description: "A compact desktop powerhouse packing elite hardware in a sub-11L case. Features full ROG styling and efficient cooling technology.",
    highlights: [
      "Ultra-compact footprint, fits easily in a backpack",
      "Full RTX 4070 Ti SUPER performance with zero thermal throttling",
      "Premium Mini-ITX motherboard with robust VRMs and WiFi 6E",
      "Sleek aluminum panels with sandwich-style layout"
    ]
  },
  {
    id: "custom-white-snow",
    name: "Snowbound RTX 4070 White Theme Build",
    brand: "NZXT",
    category: "Custom PCs",
    price: 295000,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "AMD Ryzen 5 7600X",
      GPU: "MSI RTX 4070 Gaming X Slim White 12GB",
      Motherboard: "Gigabyte B650 AORUS Elite AX Ice",
      RAM: "32GB TeamGroup T-Force Delta RGB White 6000MHz",
      Storage: "1TB Samsung 980 Pro SSD",
      PowerSupply: "Corsair RM850x Shift White 850W",
      Chassis: "NZXT H9 Flow Matte White",
      Cooler: "NZXT Kraken 360 RGB White"
    },
    description: "A complete snow-white theme setup utilizing matching components, white sleeved cables, and custom fan illumination profiles.",
    highlights: [
      "Beautiful frosted snow-white color scheme",
      "Kraken LCD block showing active GIFs or temperature readings",
      "Panoramic dual-chamber showcase chassis",
      "Runs cool and quiet even during extended sessions"
    ]
  },

  // 3. Laptops
  {
    id: "lap-strix-scar-18",
    name: "ASUS ROG Strix SCAR 18 (2024)",
    brand: "ASUS",
    category: "Laptops",
    price: 925000,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    specs: {
      CPU: "Intel Core i9-14900HX",
      RAM: "32GB DDR5 5600MHz Dual Channel",
      Storage: "2TB PCIe 4.0 NVMe SSD",
      GPU: "NVIDIA GeForce RTX 4090 16GB (175W)",
      Display: "18\" QHD+ (2560x1600) ROG Nebula HDR Mini LED 240Hz",
      OS: "Windows 11 Home",
      Weight: "3.1 kg"
    },
    description: "The absolute pinnacle of gaming laptops. Featuring an 18-inch Nebula HDR Mini LED display, a 14th Gen Intel i9 processor, and a full-power RTX 4090 GPU.",
    highlights: [
      "ROG Nebula HDR mini-LED display with 1100 nits peak brightness",
      "Maximum performance RTX 4090 laptop GPU",
      "Tri-Fan technology and liquid metal thermal compound",
      "Full per-key Aura Sync RGB keyboard"
    ]
  },
  {
    id: "lap-zephyrus-g16",
    name: "ASUS ROG Zephyrus G16 OLED (2024)",
    brand: "ASUS",
    category: "Laptops",
    price: 645000,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    specs: {
      CPU: "Intel Core Ultra 9 185H",
      RAM: "32GB LPDDR5X 7467MHz",
      Storage: "1TB PCIe 4.0 NVMe SSD",
      GPU: "NVIDIA GeForce RTX 4070 8GB GDDR6",
      Display: "16\" 2.5K (2560x1600) ROG Nebula OLED 240Hz 0.2ms",
      OS: "Windows 11 Pro",
      Weight: "1.85 kg"
    },
    description: "An ultra-thin, sleek, and light gaming machine. Possesses a mesmerizing 240Hz OLED display panel and the premium slash-lighting array on the CNC lid.",
    highlights: [
      "True black, vibrant colors with VESA DisplayHDR True Black 500 OLED",
      "Lightweight CNC aluminum chassis (1.49cm thin)",
      "Intel AI-accelerated Core Ultra processor",
      "Upgraded 6-speaker audio system with dual woofers"
    ]
  },
  {
    id: "lap-msi-titan-18",
    name: "MSI Titan 18 HX A14V",
    brand: "MSI",
    category: "Laptops",
    price: 1150000,
    availability: "pre_order",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    specs: {
      CPU: "Intel Core i9-14900HX",
      RAM: "64GB DDR5 (Expandable to 128GB)",
      Storage: "4TB RAID 0 PCIe 4.0 SSD",
      GPU: "NVIDIA GeForce RTX 4090 16GB",
      Display: "18\" UHD+ (3840x2400) Mini-LED 120Hz",
      OS: "Windows 11 Pro",
      Weight: "3.6 kg"
    },
    description: "The ultimate desktop replacement. Unparalleled expandability with 4x RAM slots, 3x SSD slots, and Cherry MX mechanical keyboard.",
    highlights: [
      "Immersive 18-inch 4K Mini-LED high resolution display",
      "SteelSeries Cherry MX Mechanical keyboard",
      "Vapor Chamber Cooler with massive output",
      "Haptic touchpad with RGB highlight zones"
    ]
  },
  {
    id: "lap-legion-pro-5",
    name: "Lenovo Legion Pro 5 Gen 9",
    brand: "Lenovo",
    category: "Laptops",
    price: 395000,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    specs: {
      CPU: "AMD Ryzen 7 8845HS",
      RAM: "16GB DDR5 5600MHz",
      Storage: "1TB PCIe 4.0 NVMe SSD",
      GPU: "NVIDIA GeForce RTX 4060 8GB (140W)",
      Display: "16\" WQXGA (2560x1600) IPS 240Hz G-SYNC",
      OS: "Windows 11 Home",
      Weight: "2.5 kg"
    },
    description: "Highly popular mid-range gaming laptop providing excellent chassis build quality, robust cooling, and great gaming performance.",
    highlights: [
      "High refresh-rate 240Hz display, great for competitive esports",
      "Powerful Ryzen 7 CPU with AMD Ryzen AI engine",
      "Legion Coldfront 5.0 advanced thermal design",
      "TrueStrike Keyboard with 4-zone RGB customization"
    ]
  },

  // 4. Processors
  {
    id: "cpu-i7-14700k",
    name: "Intel Core i7-14700K Desktop Processor",
    brand: "Intel",
    category: "Processors",
    price: 118000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "LGA1700",
      Cores: "20 (8 P-Cores + 12 E-Cores)",
      Threads: "28",
      MaxBoostClock: "5.6 GHz",
      BaseClock: "3.4 GHz",
      Cache: "33MB L3 Cache",
      TDP: "125W (Max Turbo 253W)"
    },
    description: "Featuring a higher core count than its predecessor, the 14th Gen Intel Core i7-14700K delivers stellar performance in gaming and productive workflows alike.",
    highlights: [
      "Compatible with Intel 600 and 700 series chipsets",
      "Support for both DDR4 and DDR5 memory modules",
      "Intel UHD Graphics 770 integrated graphics onboard",
      "Unlocked and overclockable multiplier"
    ]
  },
  {
    id: "cpu-ryzen-7800x3d",
    name: "AMD Ryzen 7 7800X3D Processor",
    brand: "AMD",
    category: "Processors",
    price: 114000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "AM5",
      Cores: "8",
      Threads: "16",
      MaxBoostClock: "5.0 GHz",
      BaseClock: "4.2 GHz",
      Cache: "96MB L3 V-Cache",
      TDP: "120W"
    },
    description: "The absolute best gaming processor in the market, utilizing AMD's 3D V-Cache technology to achieve outstanding gaming frame rates.",
    highlights: [
      "Unrivaled gaming efficiency and frame rates",
      "96MB of L3 3D V-Cache for low memory latencies",
      "Low power consumption compared to competitors",
      "Future-proof AM5 platform support until 2026+"
    ]
  },
  {
    id: "cpu-i9-14900k",
    name: "Intel Core i9-14900K Flagship Processor",
    brand: "Intel",
    category: "Processors",
    price: 165000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "LGA1700",
      Cores: "24 (8 P-Cores + 16 E-Cores)",
      Threads: "32",
      MaxBoostClock: "6.0 GHz",
      BaseClock: "3.2 GHz",
      Cache: "36MB L3 Cache",
      TDP: "125W (Max Turbo 253W+)"
    },
    description: "Intel's flagship processor pushing up to a blazing-fast 6.0 GHz boost out of the box. Ideal for extreme overclockers and high-end video editing rigs.",
    highlights: [
      "Blazing fast 6.0 GHz out-of-the-box boost frequency",
      "Extreme performance in multi-threaded application rendering",
      "Advanced PCIe 5.0 and DDR5 system bus compatibility",
      "Support for Intel Extreme Tuning Utility (XTU)"
    ]
  },
  {
    id: "cpu-ryzen-9700x",
    name: "AMD Ryzen 7 9700X Zen 5 CPU",
    brand: "AMD",
    category: "Processors",
    price: 135000,
    availability: "pre_order",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "AM5",
      Cores: "8",
      Threads: "16",
      MaxBoostClock: "5.5 GHz",
      BaseClock: "3.8 GHz",
      Cache: "32MB L3 Cache",
      TDP: "65W (Eco Mode available)"
    },
    description: "The next generation Zen 5 processor offering incredible IPC improvements and thermal efficiency. Ideal for gamers wanting a cool and highly efficient system.",
    highlights: [
      "Newest Zen 5 architecture on TSMC 4nm process",
      "Very low 65W TDP power draw",
      "Improved AVX-512 throughput for AI tasks",
      "Compatible with AM5 B650, X670, and X870 motherboards"
    ]
  },

  // 5. Graphics Cards
  {
    id: "gpu-rog-rtx-5080",
    name: "ASUS ROG Strix GeForce RTX 5080 16GB",
    brand: "ROG",
    category: "Graphics Cards",
    price: 495000,
    availability: "pre_order",
    warranty: "3 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Memory: "16GB GDDR7",
      MemoryBus: "256-bit",
      Architecture: "Blackwell",
      PowerConnectors: "1x 16-pin (12VHPWR)",
      RecommendedPSU: "850W",
      Outputs: "3x DisplayPort 2.1, 1x HDMI 2.1a"
    },
    description: "The upcoming powerhouse featuring NVIDIA Blackwell architecture, superfast GDDR7 memory, and the legendary ROG Strix metal shroud cooler with triple axial fans.",
    highlights: [
      "Cutting-edge NVIDIA Blackwell architecture with DLSS 4.0",
      "Ultra-fast next generation GDDR7 graphics memory",
      "Massive cooling heatsink with triple fan layout and vapor chamber",
      "Pre-filled warranty for 3 full years in Pakistan"
    ]
  },
  {
    id: "gpu-msi-rtx-4070ti-super",
    name: "MSI GeForce RTX 4070 Ti SUPER Gaming X Slim",
    brand: "MSI",
    category: "Graphics Cards",
    price: 265000,
    availability: "in_stock",
    warranty: "3 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Memory: "16GB GDDR6X",
      MemoryBus: "256-bit",
      Architecture: "Ada Lovelace",
      CUDA_Cores: "8448",
      RecommendedPSU: "750W"
    },
    description: "Featuring a specs bump to 16GB VRAM and a wider 256-bit bus, the RTX 4070 Ti SUPER is the sweet spot for modern 4K gaming and generative AI modeling.",
    highlights: [
      "Upgraded to 16GB high-bandwidth VRAM",
      "Slim chassis profile fits comfortably in smaller cases",
      "Excellent cooling efficiency with Tri Frozr 3 technology",
      "Support for full Ray Tracing and DLSS 3 Frame Generation"
    ]
  },
  {
    id: "gpu-gigabyte-rtx-4060",
    name: "Gigabyte GeForce RTX 4060 WindForce OC 8G",
    brand: "Gigabyte",
    category: "Graphics Cards",
    price: 98000,
    availability: "in_stock",
    warranty: "3 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Memory: "8GB GDDR6",
      MemoryBus: "128-bit",
      Architecture: "Ada Lovelace",
      PowerConnectors: "1x 8-pin",
      RecommendedPSU: "450W"
    },
    description: "Compact dual-fan layout RTX 4060 graphics card. Delivers outstanding performance-per-watt and handles 1080p competitive esports games with ease.",
    highlights: [
      "Extremely power efficient, requires only a single 8-pin connector",
      "WindForce dual cooling fan system with alternate spinning",
      "Full compatibility with DLSS 3.0 Frame Gen",
      "Ultra-compact length suitable for mini ITX PC cases"
    ]
  },
  {
    id: "gpu-asus-rx-7800xt",
    name: "ASUS TUF Gaming Radeon RX 7800 XT OC 16GB",
    brand: "ASUS",
    category: "Graphics Cards",
    price: 185000,
    availability: "in_stock",
    warranty: "3 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Memory: "16GB GDDR6",
      MemoryBus: "256-bit",
      Architecture: "RDNA 3",
      RecommendedPSU: "700W",
      ComputeUnits: "60"
    },
    description: "An incredible mid-range contender from AMD. With 16GB of VRAM and TUF military-grade cooling, it runs any modern game at 1440p easily.",
    highlights: [
      "16GB massive buffer for high-resolution texture packs",
      "ASUS TUF metal build frame with high durability dual ball bearings",
      "Supports AMD FSR 3.0 and Fluid Motion Frames",
      "Dual BIOS switch for Quiet or Performance profiles"
    ]
  },

  // 6. Motherboards
  {
    id: "mobo-rog-z790-hero",
    name: "ASUS ROG Maximus Z790 Hero WiFi",
    brand: "ROG",
    category: "Motherboards",
    price: 195000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "LGA1700",
      Chipset: "Intel Z790",
      MemorySupport: "DDR5 Dual Channel up to 7800MHz+",
      PCIe: "2x PCIe 5.0 x16 slots",
      USBPorts: "2x Thunderbolt 4 Type-C",
      Networking: "Intel 2.5Gb Ethernet + WiFi 6E"
    },
    description: "Top-tier enthusiast motherboard for Intel 12th, 13th, and 14th Gen processors. Features a robust 20+1 power stage delivery, diagnostic LED panels, and PCIe 5.0 M.2 support.",
    highlights: [
      "Heavy duty power delivery for peak CPU overclocking stability",
      "Dual Thunderbolt 4 ports for creator workflows",
      "Integrated I/O shield and customizable Polymo lighting display",
      "Bundled ROG Hyper M.2 card for additional SSD storage"
    ]
  },
  {
    id: "mobo-msi-b650-tomahawk",
    name: "MSI MAG B650 Tomahawk WiFi",
    brand: "MSI",
    category: "Motherboards",
    price: 72000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "AM5",
      Chipset: "AMD B650",
      MemorySupport: "DDR5 up to 6600MHz+",
      PCIe: "PCIe 4.0 x16",
      M2Slots: "3x M.2 PCIe 4.0",
      Networking: "Realtek 2.5Gb LAN + WiFi 6E"
    },
    description: "The most recommended motherboard for AMD AM5 Ryzen 7000 and 9000 series processors. Offers rock-solid build quality, excellent thermal performance on VRMs, and clean look.",
    highlights: [
      "Excellent VRM heatsink layout keeping temperatures low",
      "Easy BIOS Flashback button for next-gen CPU support",
      "Three high speed NVMe M.2 slots with Shield Frozr pads",
      "Premium audio boost codec output"
    ]
  },
  {
    id: "mobo-gigabyte-x670e-aorus",
    name: "Gigabyte X670E Aorus Pro X",
    brand: "Gigabyte",
    category: "Motherboards",
    price: 115000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "AM5",
      Chipset: "AMD X670",
      MemorySupport: "DDR5 up to 8000MHz",
      PCIe: "PCIe 5.0 x16 + PCIe 5.0 M.2 slot",
      ColorTheme: "Full White PCB & Heatsinks",
      Networking: "5GbE LAN + WiFi 7"
    },
    description: "An stunning white-themed motherboard for high-end AMD AM5 rigs. Possesses newest WiFi 7 technology and full PCIe Gen 5 support.",
    highlights: [
      "Striking snow-white design, ideal for white thematic builds",
      "Cutting edge WiFi 7 controller with ultra fast bandwidth",
      "5 Gigabit high-speed Ethernet LAN port",
      "EZ-Latch designs for toolless M.2 and GPU removal"
    ]
  },
  {
    id: "mobo-asus-prime-b760",
    name: "ASUS Prime B760M-A WiFi D4",
    brand: "ASUS",
    category: "Motherboards",
    price: 495000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    specs: {
      Socket: "LGA1700",
      Chipset: "Intel B760",
      MemorySupport: "DDR4 Dual Channel",
      FormFactor: "Micro-ATX",
      Networking: "Realtek 2.5Gb LAN + WiFi 6"
    },
    description: "An affordable, compact motherboard for budget and mid-tier Intel builds. Supporting standard DDR4 memory to keep build costs low.",
    highlights: [
      "Budget friendly build configuration using affordable DDR4 memory",
      "Dual PCIe 4.0 M.2 slots with heatsinks",
      "Includes onboard WiFi 6 and Bluetooth v5.2",
      "Micro-ATX form factor fits in smaller cases"
    ]
  },

  // 7. RAM
  {
    id: "ram-vengeance-ddr5-32",
    name: "Corsair Vengeance RGB DDR5 32GB 6000MHz",
    brand: "Corsair",
    category: "RAM",
    price: 36500,
    availability: "in_stock",
    warranty: "Lifetime Limited Warranty",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "32GB (2 x 16GB)",
      Speed: "6000 MHz",
      Latency: "CL36 (36-44-44-96)",
      Type: "DDR5 UDIMM",
      Profile: "Intel XMP 3.0 / AMD EXPO compatible",
      Lighting: "10-zone Dynamic RGB"
    },
    description: "High performance memory offering faster frequencies, greater capacities, and gorgeous customizable RGB LEDs controlled via Corsair iCUE software.",
    highlights: [
      "Optimized for Intel and AMD DDR5 platforms",
      "High speed 6000MHz CL36 sweet-spot configuration",
      "Individually addressable RGB LEDs",
      "Robust aluminum heatspreaders for heat dissipation"
    ]
  },
  {
    id: "ram-tridentz5-rgb-32",
    name: "G.Skill Trident Z5 RGB 32GB DDR5 6000MHz",
    brand: "Kingston",
    category: "RAM",
    price: 38500,
    availability: "in_stock",
    warranty: "Lifetime Limited Warranty",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "32GB (2 x 16GB)",
      Speed: "6000 MHz",
      Latency: "CL30 (30-38-38-96)",
      Type: "DDR5",
      Profile: "AMD EXPO / Intel XMP",
      Design: "Dual-texture aluminum heat spreader"
    },
    description: "G.Skill Trident Z5 RGB represents the pinnacle of memory engineering. Possesses low latency CL30 timings for maximum frame delivery in games.",
    highlights: [
      "Ultra-low latency CL30 profiles optimized for AMD Ryzen CPUs",
      "Award winning premium brushed aluminum styling",
      "High reliability IC chips selected through rigorous testing",
      "Seamless RGB sync with ASUS, MSI, and Gigabyte software"
    ]
  },
  {
    id: "ram-fury-beast-16",
    name: "Kingston FURY Beast DDR5 16GB 5200MHz",
    brand: "Kingston",
    category: "RAM",
    price: 17500,
    availability: "in_stock",
    warranty: "Lifetime Limited Warranty",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "16GB (1 x 16GB)",
      Speed: "5200 MHz",
      Type: "DDR5",
      Profile: "Intel XMP 3.0",
      Heatsink: "Low-profile black design"
    },
    description: "A solid single module DDR5 upgrade. Features plug-and-play automatic overclocking at 4800MHz and is low profile to prevent AIO/cooler clearance issues.",
    highlights: [
      "Low profile black aluminum heat spreader fits under large air coolers",
      "Plug & Play auto-overclocking features",
      "XMP 3.0 certified timings",
      "Cost-efficient upgrade path to double capacity later"
    ]
  },
  {
    id: "ram-dominator-64",
    name: "Corsair Dominator Titanium DDR5 64GB 6000MHz",
    brand: "Corsair",
    category: "RAM",
    price: 78000,
    availability: "pre_order",
    warranty: "Lifetime Limited Warranty",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "64GB (2 x 32GB)",
      Speed: "6000 MHz",
      Latency: "CL30",
      Type: "DDR5",
      Customization: "Interchangeable top bars"
    },
    description: "Ultra-premium memory modules featuring gorgeous top bar customizability, DHX cooling technology, and Corsair DHX dual-path cooling system.",
    highlights: [
      "Top-tier memory binning allowing maximum overclock headroom",
      "DHX cooling tech where the PCB is cooled directly",
      "11 vibrant addressable Capellix LEDs on each stick",
      "Interchangeable top bars for customizable aesthetics"
    ]
  },

  // 8. SSD
  {
    id: "ssd-990pro-2tb",
    name: "Samsung 990 PRO 2TB PCIe 4.0 NVMe SSD",
    brand: "Samsung",
    category: "SSD",
    price: 52000,
    availability: "in_stock",
    warranty: "5 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "2TB",
      Interface: "PCIe Gen 4.0 x4, NVMe 2.0",
      SequentialRead: "Up to 7,450 MB/s",
      SequentialWrite: "Up to 6,900 MB/s",
      Cache: "2GB Low Power DDR4 SDRAM",
      TBW: "1200 TBW"
    },
    description: "The gold standard of PCIe Gen 4 storage. Provides extreme read/write speeds, high power efficiency, and optimized thermal control for gaming and video rendering.",
    highlights: [
      "Top of class PCIe 4.0 speeds pushing NVMe limit",
      "50% improved power-per-watt efficiency compared to 980 Pro",
      "Ideal for PlayStation 5 and high-end gaming desktops",
      "Samsung Magician software support for health tracking"
    ]
  },
  {
    id: "ssd-wd-sn850x-1tb",
    name: "WD Black SN850X 1TB Gaming NVMe SSD",
    brand: "WD",
    category: "SSD",
    price: 29500,
    availability: "in_stock",
    warranty: "5 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "1TB",
      Interface: "PCIe Gen 4.0 x4",
      SequentialRead: "Up to 7,300 MB/s",
      SequentialWrite: "Up to 6,300 MB/s",
      Features: "Game Mode 2.0 thermal loading management"
    },
    description: "Optimized primarily for heavy gaming. Features Game Mode 2.0 on dashboard utility to preemptively load game assets for reduced lobby loading times.",
    highlights: [
      "Extremely fast loading times with high queue depths",
      "Game Mode 2.0 improves asset rendering speeds",
      "Premium black PCB aesthetic",
      "5 year official local warranty support"
    ]
  },
  {
    id: "ssd-crucial-t700-2tb",
    name: "Crucial T700 Gen5 2TB NVMe SSD",
    brand: "Crucial",
    category: "SSD",
    price: 95000,
    availability: "pre_order",
    warranty: "5 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "2TB",
      Interface: "PCIe Gen 5.0 x4",
      SequentialRead: "Up to 12,400 MB/s",
      SequentialWrite: "Up to 11,800 MB/s",
      Cooling: "Comes with premium aluminum heatsink"
    },
    description: "Enter the generation of speed. Pushing over 12,000MB/s sequential read speeds, the Crucial T700 SSD is powered by Micron 232-layer TLC NAND.",
    highlights: [
      "Mind blowing PCIe 5.0 speeds for instantaneous systems",
      "High quality custom heatsink preventing thermal throttling",
      "Backward compatible with PCIe 3.0 and 4.0 sockets",
      "Designed specifically for Microsoft DirectStorage"
    ]
  },
  {
    id: "ssd-kingston-nv2-1tb",
    name: "Kingston NV2 1TB PCIe 4.0 NVMe SSD",
    brand: "Kingston",
    category: "SSD",
    price: 19500,
    availability: "in_stock",
    warranty: "3 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "1TB",
      Interface: "PCIe Gen 4.0 x4, NVMe",
      SequentialRead: "Up to 3,500 MB/s",
      SequentialWrite: "Up to 2,100 MB/s",
      FormFactor: "M.2 2280"
    },
    description: "The ultimate value storage solution. Ideal for budget gaming PCs, laptop storage expansion, and secondary data drives.",
    highlights: [
      "Very budget-friendly pricing",
      "Low power consumption and minimal heat output",
      "Slim single-sided M.2 configuration",
      "Standard PCIe 4.0 capability"
    ]
  },

  // 9. HDD
  {
    id: "hdd-seagate-2tb",
    name: "Seagate BarraCuda 2TB 7200RPM HDD",
    brand: "WD",
    category: "HDD",
    price: 16500,
    availability: "in_stock",
    warranty: "2 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "2TB",
      SpindleSpeed: "7200 RPM",
      Cache: "256MB Cache",
      Interface: "SATA 6Gb/s",
      FormFactor: "3.5-inch"
    },
    description: "Reliable mass storage drive for gaming libraries, backups, and office documents. Features Seagate's Multi-Tier Caching technology.",
    highlights: [
      "Fast 7200 RPM drive speeds compared to 5400 RPM versions",
      "Massive 2TB space for storing videos, music, and downloads",
      "High reliability track record over a decade",
      "Standard SATA connector works with any motherboard"
    ]
  },
  {
    id: "hdd-wd-blue-4tb",
    name: "WD Blue 4TB 5400RPM Storage HDD",
    brand: "WD",
    category: "HDD",
    price: 28500,
    availability: "in_stock",
    warranty: "2 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "4TB",
      SpindleSpeed: "5400 RPM",
      Cache: "256MB Cache",
      Interface: "SATA 6Gb/s"
    },
    description: "Quiet and power-efficient secondary storage, designed specifically for desktop PCs and cold-storage system archives.",
    highlights: [
      "Large 4TB storage capacity",
      "Whisper quiet operation and lower power draw",
      "NoTouch Ramp Load technology protects recording head",
      "Perfect for movie libraries and system backups"
    ]
  },
  {
    id: "hdd-toshiba-1tb",
    name: "Toshiba P300 1TB Desktop Hard Drive",
    brand: "Samsung",
    category: "HDD",
    price: 11500,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "1TB",
      SpindleSpeed: "7200 RPM",
      Cache: "64MB Cache",
      Interface: "SATA 6Gb/s"
    },
    description: "A highly affordable, stable 1TB internal mechanical drive. Fits standard desktop cases.",
    highlights: [
      "Highly affordable pricing",
      "7200 RPM operation speed",
      "Standard performance for basic storage needs",
      "Built-in shock sensors protecting system data"
    ]
  },
  {
    id: "hdd-seagate-ironwolf-8tb",
    name: "Seagate IronWolf 8TB NAS HDD",
    brand: "WD",
    category: "HDD",
    price: 68000,
    availability: "pre_order",
    warranty: "3 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "8TB",
      SpindleSpeed: "7200 RPM",
      Interface: "SATA 6Gb/s",
      Optimization: "NAS Optimized with AgileArray firmware",
      WorkloadRate: "180TB/year"
    },
    description: "Premium NAS-grade storage designed for 24/7 multi-user environments. Ideal for creative studios and home media servers.",
    highlights: [
      "Optimized for RAID setups and 24/7 continuous operation",
      "Rotational Vibration (RV) sensors control chassis vibrations",
      "IronWolf Health Management helps monitor drive status",
      "AgileArray technology for drive balance and RAID performance"
    ]
  },

  // 10. Power Supplies
  {
    id: "psu-corsair-rm1000x",
    name: "Corsair RM1000x 1000W 80+ Gold PSU",
    brand: "Corsair",
    category: "Power Supplies",
    price: 49500,
    availability: "in_stock",
    warranty: "10 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Wattage: "1000W",
      EfficiencyRating: "80 Plus Gold Certified",
      Modular: "Fully Modular layout",
      Fan: "135mm Magnetic Levitation Fan",
      ATX_Standard: "ATX 2.4",
      Capacitors: "100% Japanese 105C"
    },
    description: "Providing clean, reliable power with high efficiency. Features fully modular black cables and a magnetic levitation fan for near-silent operation.",
    highlights: [
      "Massive 1000W output, great for dual-GPU or high overclock rigs",
      "Zero RPM fan mode during low to medium loads",
      "Fully modular flat black cables for easier cable routes",
      "Supported by a massive 10 year manufacturer warranty"
    ]
  },
  {
    id: "psu-rog-thor-1200",
    name: "ASUS ROG Thor 1200W Platinum II",
    brand: "ROG",
    category: "Power Supplies",
    price: 98000,
    availability: "in_stock",
    warranty: "10 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Wattage: "1200W",
      EfficiencyRating: "80 Plus Platinum Certified",
      Modular: "Fully Modular",
      SpecialFeatures: "OLED display showing live wattage, Aura Sync RGB",
      Cables: "Sleeved Premium Cable Set"
    },
    description: "The quietest 1200W power supply in the industry. Adorned with a custom side-mounted OLED panel showing system power draw in real time.",
    highlights: [
      "80 Plus Platinum certified for high efficiency and low heat",
      "Integrated OLED panel shows live system wattage utilization",
      "ROG customized heatsinks offering double thermal volume",
      "Bundled with individual sleeved black cables with routing combs"
    ]
  },
  {
    id: "psu-msi-mag-750",
    name: "MSI MAG A750GL 750W 80+ Gold PCIe 5",
    brand: "MSI",
    category: "Power Supplies",
    price: 32500,
    availability: "in_stock",
    warranty: "5 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Wattage: "750W",
      EfficiencyRating: "80 Plus Gold",
      Modular: "Fully Modular",
      PCIe5_Support: "Native 12VHPWR connector (ATX 3.0)"
    },
    description: "The ideal modern power supply supporting NVIDIA 40-series cards. Native 12VHPWR cable removes the need for bulky GPU adapters.",
    highlights: [
      "Native ATX 3.0 and PCIe 5.0 compatible power distribution",
      "Yellow-tipped 12VHPWR connector ensures correct insert check",
      "Compact 140mm design fits in standard cases",
      "80 Plus Gold efficiency rating"
    ]
  },
  {
    id: "psu-seasonic-850",
    name: "Seasonic Focus GX-850 850W Gold",
    brand: "Corsair",
    category: "Power Supplies",
    price: 39500,
    availability: "in_stock",
    warranty: "10 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Wattage: "850W",
      EfficiencyRating: "80 Plus Gold",
      Modular: "Fully Modular",
      FanControl: "Smart & Silent Fan Control (S2FC)"
    },
    description: "Seasonic's legendary engineering in a small, efficient package. High tolerance components with quiet operation profiles.",
    highlights: [
      "Top-tier ripple noise suppression and voltage regulation",
      "Fully modular configuration with ribbon-style cables",
      "Fluid Dynamic Bearing (FDB) fan design",
      "Extremely long MTBF reliability stats"
    ]
  },

  // 11. Cases
  {
    id: "case-lianli-o11evo",
    name: "Lian Li O11 Dynamic EVO RGB Black",
    brand: "NZXT",
    category: "Cases",
    price: 54000,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Mid-Tower",
      Material: "4.0mm Tempered Glass, Aluminum, Steel",
      MotherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      GPUClearance: "455 mm",
      RadiatorSupport: "Up to 360mm on top/side/bottom",
      Aesthetic: "Dual diffuse RGB strips on top & bottom border"
    },
    description: "The legendary dual-chamber panoramic chassis, now updated with thick addressable RGB lines and reversible layout configuration possibilities.",
    highlights: [
      "Seamless panoramic glass view of internal components",
      "Reversible layout (can be configured to sit on left or right of desk)",
      "Dual strip RGB strips with multiple mode controls",
      "Massive radiator clearance space for water cooling loops"
    ]
  },
  {
    id: "case-nzxt-h9flow",
    name: "NZXT H9 Flow Matte White Showcase Case",
    brand: "NZXT",
    category: "Cases",
    price: 49500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Dual-Chamber Mid-Tower",
      Material: "SGCC Steel, Tempered Glass",
      Color: "Matte White",
      FansIncluded: "4x F120Q Case Fans",
      GPUClearance: "435 mm"
    },
    description: "High-airflow dual-chamber showcase case. Designed to cool high-power GPUs while displaying components behind wrap-around glass panels.",
    highlights: [
      "Perforated mesh top and side panel for massive air intakes",
      "Two chamber layout hiding cable mess and power supplies",
      "Wrap-around seamless glass front panels",
      "Comes with 4 preinstalled quiet fans"
    ]
  },
  {
    id: "case-corsair-4000d",
    name: "Corsair 4000D Airflow Tempered Glass Black",
    brand: "Corsair",
    category: "Cases",
    price: 29500,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Mid-Tower",
      Material: "Steel, Tempered Glass, Plastic",
      CableManagement: "Corsair RapidRoute system (25mm depth)",
      FansIncluded: "2x 120mm Corsair AirGuide fans"
    },
    description: "Highly popular minimalist mid-tower chassis. Features a high-airflow triangular-patterned mesh steel front panel.",
    highlights: [
      "High airflow front mesh panel design",
      "RapidRoute clean cable channeling routes with zip-ties",
      "Sleek tinted tempered glass side window panel",
      "Fits high-end GPUs up to 360mm"
    ]
  },
  {
    id: "case-rog-hyperion",
    name: "ASUS ROG Hyperion GR701 Metal Frame Case",
    brand: "ROG",
    category: "Cases",
    price: 145000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Full Tower",
      Material: "Die-cast Aluminum alloy, Glass, Steel",
      SpecialFeatures: "Built-in GPU holder, tool drawer, dual Type-C 20Gbps",
      Weight: "20.8 kg"
    },
    description: "A colossal full-tower chassis designed for premium builds. X-shaped aluminum alloy frame, dual swing-out glass doors, and heavy radiator capabilities.",
    highlights: [
      "Epic X-shaped aluminum handle structure carrying up to 80kg",
      "Dual swing doors with toolless release buttons",
      "Built-in storage drawer for screwdriver and spare screws",
      "Dual USB-C 20Gbps ports on the front I/O panel"
    ]
  },

  // 12. CPU Coolers
  {
    id: "cool-nzxt-kraken-360",
    name: "NZXT Kraken Elite 360 RGB White LCD AIO",
    brand: "NZXT",
    category: "CPU Coolers",
    price: 84000,
    availability: "in_stock",
    warranty: "6 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Liquid AIO Cooler",
      RadiatorSize: "360 mm",
      PumpSpeed: "800 - 3600 RPM (Asetek 7th Gen)",
      Display: "2.36\" Wide-Angle TFT-LCD (640x640 resolution)",
      Fans: "3x F120 RGB Core Fans"
    },
    description: "Get high-performance cooling and display your favorite GIF, system temperatures, or custom branding on a premium 640x640 resolution LCD screen.",
    highlights: [
      "Gorgeous high-res circular LCD screen showing hardware stats",
      "Industry leading Asetek pump design for silent operation",
      "High static pressure RGB fans included",
      "Long 6 year warranty period"
    ]
  },
  {
    id: "cool-corsair-h150i",
    name: "Corsair iCUE Link H150i RGB 360mm AIO",
    brand: "Corsair",
    category: "CPU Coolers",
    price: 78000,
    availability: "in_stock",
    warranty: "5 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Liquid AIO",
      RadiatorSize: "360 mm",
      EcoSystem: "Corsair iCUE LINK single cable system",
      Fans: "3x QX120 RGB Fans (up to 2400 RPM)"
    },
    description: "Clean up your build with Corsair iCUE LINK architecture. Connects pump and all fans through a single proprietary digital cable interface.",
    highlights: [
      "Revolutionary single-cable daisy chain setup reduces clutter",
      "Premium QX120 fans with time-warp lighting animations",
      "Pre-applied Corsair XTM70 thermal compound",
      "Copper coldplate optimized for Intel and AMD cores"
    ]
  },
  {
    id: "cool-noctua-d15",
    name: "Noctua NH-D15 chromax.black Dual-Tower",
    brand: "Corsair",
    category: "CPU Coolers",
    price: 36500,
    availability: "in_stock",
    warranty: "6 Years Limited Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Dual-Tower Air Cooler",
      Heatsink: "6 Heatpipe Copper base, Aluminum fins",
      Fans: "2x NF-A15 HS-PWM 140mm Fans",
      MaxNoise: "24.6 dB(A)"
    },
    description: "The king of air coolers, now in a sleek matte-black shroud. Outperforms many entry liquid coolers while maintaining whisper quiet fan noise.",
    highlights: [
      "Ultimate reliability with zero risk of liquid leakage",
      "Whisper quiet NF-A15 premium fans with low noise adapters",
      "Outstanding RAM clearance in single-fan mode",
      "SecuFirm2 multi-socket mounting system"
    ]
  },
  {
    id: "cool-deepcool-lt720",
    name: "DeepCool LT720 360mm Multidimensional AIO",
    brand: "Corsair",
    category: "CPU Coolers",
    price: 38500,
    availability: "in_stock",
    warranty: "3 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Liquid AIO",
      RadiatorSize: "360 mm",
      PumpDesign: "4th Gen High-Efficiency Pump",
      Visuals: "Infinity Mirror 3D geometric block"
    },
    description: "Features a striking geometric infinity mirror pump block design providing beautiful ambient visual effects for custom setups.",
    highlights: [
      "Unique multidimensional infinity mirror block design",
      "High performance FK120 fans preinstalled",
      "Antileak technology automatically balances pressure",
      "Strong VRM cooling airflow bounds"
    ]
  },

  // 13. Gaming Monitors
  {
    id: "mon-rog-oled-32",
    name: "ASUS ROG Swift OLED PG32UCDM 32\" 4K 240Hz",
    brand: "ROG",
    category: "Gaming Monitors",
    price: 445000,
    availability: "pre_order",
    warranty: "3 Years Burn-in Warranty",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    specs: {
      PanelSize: "31.5-inch OLED",
      Resolution: "4K UHD (3840 x 2160)",
      RefreshRate: "240 Hz",
      ResponseTime: "0.03 ms (GTG)",
      HDR: "Dolby Vision, VESA DisplayHDR True Black 400",
      Connectivity: "DisplayPort 1.4, HDMI 2.1, USB-C (90W Power Delivery)"
    },
    description: "The ultimate 4K gaming monitor. Combines a third-generation QD-OLED panel, 240Hz refresh rate, and near-instantaneous response times for pristine visuals.",
    highlights: [
      "Stunning QD-OLED display providing infinite contrast and deep blacks",
      "Ultra smooth 240Hz gaming speeds with zero blur",
      "Premium custom heatsink keeps panel cool to prevent burn-in",
      "USB-C port supports charging laptop at 90W"
    ]
  },
  {
    id: "mon-msi-g274",
    name: "MSI G274QPF-QD 27\" 170Hz Quantum Dot",
    brand: "MSI",
    category: "Gaming Monitors",
    price: 112000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    specs: {
      PanelSize: "27-inch Rapid IPS",
      Resolution: "WQHD (2560 x 1440)",
      RefreshRate: "170 Hz",
      ResponseTime: "1 ms (GTG)",
      ColorGamut: "93% Adobe RGB, Quantum Dot technology"
    },
    description: "Exceptional color performance utilizing a Quantum Dot film layer. Perfect for both competitive gamers and photography content editors.",
    highlights: [
      "Rapid IPS panel ensures fast responses and wide angles",
      "Quantum Dot technology outputs rich, vibrant primary colors",
      "WQHD 2560x1440 pixel resolution sweet-spot",
      "Adjustable ergonomic stand (tilt, swivel, pivot)"
    ]
  },
  {
    id: "mon-gigabyte-m27q",
    name: "Gigabyte M27Q 27\" 170Hz KVM Monitor",
    brand: "Gigabyte",
    category: "Gaming Monitors",
    price: 98000,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    specs: {
      PanelSize: "27-inch Super Speed IPS",
      Resolution: "2560 x 1440",
      RefreshRate: "170 Hz",
      KVM: "Built-in hardware KVM switch",
      ResponseTime: "0.5 ms (MPRT)"
    },
    description: "The world's first gaming monitor with a built-in KVM switch. Toggle controls between laptop and PC with a single button.",
    highlights: [
      "Built-in KVM switch to control two systems with one keyboard/mouse",
      "Super Speed IPS panel with wide sRGB color spectrum",
      "High refresh-rate and AMD FreeSync Premium support",
      "USB Type-C connectivity"
    ]
  },
  {
    id: "mon-samsung-odyssey-g9",
    name: "Samsung Odyssey G9 OLED 49\" Ultrawide",
    brand: "Samsung",
    category: "Gaming Monitors",
    price: 495000,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    specs: {
      PanelSize: "49-inch Curved (1800R)",
      Resolution: "Dual QHD (5120 x 1440)",
      AspectRatio: "32:9 Aspect Ratio",
      RefreshRate: "240 Hz",
      ResponseTime: "0.03 ms"
    },
    description: "A colossal 49-inch dual QHD OLED monitor curved to wrap around your visual field. Equivalent to sitting in front of two 27\" monitors side by side.",
    highlights: [
      "Ultra-wide 32:9 curved OLED display for total immersion",
      "Neo Quantum Processor Pro optimizes colors and contrasts",
      "Fast 240Hz refresh rate and FreeSync Pro",
      "Sleek metal stand with Ring lighting sync"
    ]
  },

  // 14. Mechanical Keyboards
  {
    id: "kb-rog-azoth",
    name: "ASUS ROG Azoth Wireless Custom Keyboard",
    brand: "ROG",
    category: "Mechanical Keyboards",
    price: 78000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: {
      Layout: "75% Form Factor layout",
      Switches: "ROG NX Red pre-lubed mechanical switches",
      HotSwappable: "Yes, 5-pin hot-swap sockets",
      Connectivity: "2.4GHz SpeedNova, Bluetooth, USB Wired",
      Display: "Integrated 2\" OLED display panel and control knob",
      Mounting: "Silicone gasket mount with 3 layers of dampening foam"
    },
    description: "A boutique-level custom keyboard in a retail package. Features gasket mount, lubed switches, hot-swap, and a versatile customizable side OLED panel.",
    highlights: [
      "Gasket mount design with dampening provides a premium typing sound",
      "Customizable OLED screen displays battery, media, and CPU stats",
      "Lubed stabilisers and switches out of the box",
      "Includes complete switch lubing DIY kit in the package"
    ]
  },
  {
    id: "kb-razer-blackwidow",
    name: "Razer BlackWidow V4 Pro Mechanical Keyboard",
    brand: "Razer",
    category: "Mechanical Keyboards",
    price: 64000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: {
      Layout: "Full Size layout",
      Switches: "Razer Green (Clicky) / Yellow (Linear)",
      Lighting: "Per-Key Chroma RGB with 3-Side Underglow",
      Controls: "Razer Command Dial and 8 Dedicated Macro keys",
      WristRest: "Plush leatherette magnetic wrist rest with lighting"
    },
    description: "A feature-rich control center for gaming setups. Double dial commands, dedicated macro side keys, and rich underglow lighting integration.",
    highlights: [
      "Multifunction command dial customizable for apps and games",
      "Plush padded wrist rest with full underglow lighting integration",
      "Razer mechanical switches rated up to 100M clicks",
      "Doubleshot ABS keycaps preventing key text fading"
    ]
  },
  {
    id: "kb-logi-g915",
    name: "Logitech G915 TKL Wireless Mechanical",
    brand: "Logitech",
    category: "Mechanical Keyboards",
    price: 49500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: {
      Layout: "Tenkeyless (TKL)",
      Switches: "Low-Profile GL Tactile / Linear",
      Thickness: "Ultra-thin 22 mm",
      Connectivity: "Lightspeed Wireless, Bluetooth, USB",
      BatteryLife: "Up to 40 hours with RGB at 100%"
    },
    description: "Premium low-profile keyboard crafted from aircraft-grade aluminum alloy. Boasts Lightspeed wireless for sub-1ms response times.",
    highlights: [
      "Ultra-thin sleek low profile aesthetic",
      "Lag-free Lightspeed wireless connection protocol",
      "Dedicated physical volume scroll roller and media buttons",
      "Excellent battery life with micro-USB quick charge"
    ]
  },
  {
    id: "kb-corsair-k70",
    name: "Corsair K70 RGB PRO Mechanical Keyboard",
    brand: "Corsair",
    category: "Mechanical Keyboards",
    price: 42500,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: {
      Layout: "Full size layout",
      Switches: "Cherry MX Red Linear",
      PollingRate: "AXON hyper-polling up to 8000Hz",
      Keycaps: "Double-shot PBT keycaps",
      Cable: "Detachable braided USB-C"
    },
    description: "The classic esports keyboard updated with Corsair AXON processing technology, delivering keystrokes 8x faster than standard keyboards.",
    highlights: [
      "Esports grade 8000Hz polling rate for instant inputs",
      "Long-lasting textured PBT double-shot keycaps",
      "Classic durable brushed aluminum faceplate",
      "Dedicated Tournament Mode switch to disable macros and set static color"
    ]
  },

  // 15. Gaming Mice
  {
    id: "mouse-razer-deathadder",
    name: "Razer DeathAdder V3 Pro Wireless Mouse",
    brand: "Razer",
    category: "Gaming Mice",
    price: 38500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Weight: "Ultra-lightweight 63g design",
      Sensor: "Razer Focus Pro 30K Optical Sensor",
      Switches: "Razer Optical Mouse Switches Gen-3 (90M clicks)",
      Connectivity: "Razer HyperSpeed Wireless",
      PollingRate: "Supports up to 8000Hz (with HyperPolling dongle)"
    },
    description: "Refined ergonomic design engineered with esports pros. An ultra-lightweight profile packed with industry-leading tracking accuracy.",
    highlights: [
      "Remarkably light 63-gram ergonomic design for fast flicking",
      "99.8% resolution tracking accuracy Focus Pro sensor",
      "Zero double-clicking risks with light-speed optical switches",
      "Excellent battery life up to 90 hours"
    ]
  },
  {
    id: "mouse-logi-superlight",
    name: "Logitech G Pro X Superlight 2 Wireless",
    brand: "Logitech",
    category: "Gaming Mice",
    price: 43500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Weight: "60 grams",
      Sensor: "HERO 2 Sensor (32,000 DPI)",
      Switches: "LIGHTFORCE Hybrid switches (optical-mechanical)",
      PollingRate: "Native 2000Hz wireless polling",
      Charging: "USB-C charging and Powerplay compatible"
    },
    description: "The trusted choice of champion esports athletes. Upgraded with hybrid switches, HERO 2 sensor, and USB-C.",
    highlights: [
      "Featherlight 60g symmetrical shape",
      "LIGHTFORCE hybrid switches merge tactile feel with optical speed",
      "Pixel-precise tracking even when lifting mouse off mousepad",
      "PTFE mouse feet for zero-friction glides"
    ]
  },
  {
    id: "mouse-rog-harpe",
    name: "ASUS ROG Harpe Ace Aim Lab Edition",
    brand: "ROG",
    category: "Gaming Mice",
    price: 36500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Weight: "54 grams",
      Sensor: "ROG AimPoint 36,000 DPI sensor",
      Connectivity: "ROG SpeedNova Wireless, Bluetooth, USB",
      Features: "Aim Lab analyzer software integration",
      ShellMaterial: "Bio-based nylon shell"
    },
    description: "Co-developed with Aim Lab pro players. Features a 54g bio-nylon chassis, ultra-fast SpeedNova wireless, and calibration utilities.",
    highlights: [
      "One of the lightest mice at 54 grams",
      "Bio-based eco-friendly nylon shell with textured surface",
      "Software analyzes player mouse movements to recommend DPI settings",
      "Bundled with custom ROG patterned grip tapes"
    ]
  },
  {
    id: "mouse-glorious-model-o",
    name: "Glorious Model O 2 Wireless Gaming Mouse",
    brand: "Corsair",
    category: "Gaming Mice",
    price: 24500,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Weight: "68 grams",
      Sensor: "BAMF 2.0 26K Sensor",
      Connectivity: "2.4GHz / Bluetooth / Wired",
      Design: "Honeycomb ventilated shell with RGB strips"
    },
    description: "Symmetrical honeycomb body offering maximum hand ventilation during long sessions. Updated with the highly efficient BAMF 2.0 sensor.",
    highlights: [
      "Honeycomb shell structure reduces weight and keeps palm cool",
      "Gorgeous dual side RGB illumination tracks",
      "BAMF 2.0 sensor with low power draw",
      "Supports Bluetooth for portable laptop operations"
    ]
  },

  // 16. Gaming Headsets
  {
    id: "head-hyperx-cloud3",
    name: "HyperX Cloud III Gaming Headset Black",
    brand: "Corsair",
    category: "Gaming Headsets",
    price: 28500,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Wired USB / 3.5mm Headset",
      Drivers: "Angled 53mm Neodymium drivers",
      Microphone: "Detachable 10mm ultra-clear mic with indicator",
      AudioSupport: "DTS Headphone:X Spatial Audio (Lifetime)",
      Frame: "Full metal aluminum headband frame"
    },
    description: "The successor to the legendary Cloud II. Delivers upgraded comfort with signature memory foam, re-engineered angled drivers, and crystal-clear microphone capture.",
    highlights: [
      "Signature HyperX comfort with red memory foam headband and cushions",
      "Re-tuned angled 53mm drivers offer deep, crisp game sounds",
      "Metal frame built to survive travel and drops",
      "Compatible with PC, PS5, Xbox Series X, and Nintendo Switch"
    ]
  },
  {
    id: "head-steelseries-nova",
    name: "SteelSeries Arctis Nova Pro Wireless",
    brand: "Razer",
    category: "Gaming Headsets",
    price: 94000,
    availability: "in_stock",
    warranty: "1 Year Store Warranty",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: {
      Connectivity: "Dual Wireless 2.4GHz + Bluetooth",
      ANC: "Active Noise Cancellation with Transparency mode",
      DAC: "Wireless Base Station DAC with Dual USB inputs",
      BatterySystem: "Hot-swap dual battery system (Infinity Power)"
    },
    description: "The peak of gaming audio. High-fidelity audio drivers, active noise cancellation, and a wireless DAC station allowing dual-system inputs.",
    highlights: [
      "Active Noise Cancellation (ANC) keeps focus in games",
      "Wireless DAC box switches input between PC and Console instantly",
      "Hot-swappable batteries - charge one inside DAC while playing with other",
      "High-Fidelity audio certified drivers"
    ]
  },
  {
    id: "head-razer-blackshark",
    name: "Razer BlackShark V2 Pro Wireless (2023)",
    brand: "Razer",
    category: "Gaming Headsets",
    price: 48500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: {
      Drivers: "Razer TriForce Titanium 50mm",
      Microphone: "Razer HyperClear Super Wideband Mic (32kHz)",
      Connectivity: "2.4GHz HyperSpeed Wireless, Bluetooth 5.2",
      BatteryLife: "Up to 70 hours"
    },
    description: "Esports gaming headset updated with a professional wideband microphone, custom-tuned audio EQ profiles, and ultra fast Type-C charging.",
    highlights: [
      "Broadcast-grade 32kHz wideband detachable microphone",
      "THX Spatial Audio pinpointing enemy footsteps",
      "Ultra-soft flow-knit memory foam ear cushions",
      "Long 70-hour battery charge capacity"
    ]
  },
  {
    id: "head-logi-gpro-2",
    name: "Logitech G Pro X 2 LIGHTSPEED Wireless",
    brand: "Logitech",
    category: "Gaming Headsets",
    price: 62500,
    availability: "pre_order",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: {
      Drivers: "50mm Graphene drivers",
      Connectivity: "Lightspeed wireless, Bluetooth, 3.5mm cable",
      Hinge: "Durable rotating aluminum hinge design",
      Mic: "6mm Cardioid Mic with Blue VO!CE filter"
    },
    description: "Designed with professional players. Features revolutionary graphene drivers delivering highly accurate audio response with minimal distortions.",
    highlights: [
      "First gaming headset utilizing advanced Graphene diaphragm drivers",
      "Blue VO!CE software software filters voice for professional streaming",
      "Extremely comfortable memory foam leatherette ear pads",
      "Up to 50 hours of battery life on a single charge"
    ]
  },

  // 17. Controllers
  {
    id: "ctrl-xbox-carbon",
    name: "Xbox Wireless Controller - Carbon Black",
    brand: "Intel",
    category: "Controllers",
    price: 18500,
    availability: "in_stock",
    warranty: "6 Months Store Warranty",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    specs: {
      Connectivity: "Xbox Wireless, Bluetooth, USB-C",
      Jack: "3.5mm Stereo Headset Jack",
      Batteries: "2x AA Batteries (Up to 40 hours)",
      Compatibility: "Xbox Series X|S, Xbox One, PC, Android, iOS"
    },
    description: "Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay.",
    highlights: [
      "Textured grip on triggers, bumpers, and back-case",
      "Hybrid D-pad for precise diagonal inputs",
      "Share button to easily capture screenshot and clips",
      "Plug and play compatibility with Windows 10/11"
    ]
  },
  {
    id: "ctrl-sony-dualsense",
    name: "PlayStation 5 DualSense Edge Controller",
    brand: "Samsung",
    category: "Controllers",
    price: 68000,
    availability: "in_stock",
    warranty: "6 Months Store Warranty",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Pro Customizable Controller",
      Thumbsticks: "Replaceable stick modules",
      RearButtons: "2 customizable back paddles",
      TriggerLocks: "Adjustable trigger travel locks"
    },
    description: "Sony's premium pro-grade controller. Personalize button mapping, stick sensitivity, deadzones, and switch between custom profiles on the fly.",
    highlights: [
      "Swappable stick modules prevent stick-drift worries",
      "Customizable back buttons mapping",
      "Haptic feedback and adaptive triggers",
      "Premium carry case with charging cable pass-through"
    ]
  },
  {
    id: "ctrl-razer-wolverine",
    name: "Razer Wolverine V2 Chroma Pro Controller",
    brand: "Razer",
    category: "Controllers",
    price: 59500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    specs: {
      Connectivity: "Razer HyperSpeed Wireless + USB Wired",
      ActionButtons: "Razer Mecha-Tactile Action Buttons",
      ExtraButtons: "6 multi-function remappable buttons",
      Lighting: "Razer Chroma RGB strip highlights"
    },
    description: "Pro gaming controller featuring mechanical action buttons, wireless dongle, interchangeable thumbsticks, and full Chroma RGB mapping.",
    highlights: [
      "Mecha-tactile buttons with short 0.65mm actuation distance",
      "Interchangeable dome and tall thumbstick heads",
      "6 extra remappable triggers and bumpers",
      "Hair trigger mode with trigger stop switches"
    ]
  },
  {
    id: "ctrl-rog-raikiri",
    name: "ASUS ROG Raikiri Pro Xbox Controller",
    brand: "ROG",
    category: "Controllers",
    price: 49500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    specs: {
      Display: "Built-in OLED Display (1.3-inch, 128x40)",
      Connectivity: "Tri-mode connection (2.4GHz, Bluetooth, USB-C)",
      Audio: "Built-in ESS DAC for premium audio output",
      RearButtons: "4 remappable back keys"
    },
    description: "Features a customizable built-in OLED display, tri-mode connectivity, four rear buttons, and high-fidelity ESS DAC for gaming headsets.",
    highlights: [
      "Custom OLED screen shows animations, battery status, or active profile",
      "ESS DAC audio chip inside controller outputs studio audio quality",
      "Adjustable step trigger locks",
      "Fully customized via ASUS Armoury Crate"
    ]
  },

  // 18. Networking
  {
    id: "net-tplink-ax55",
    name: "TP-Link Archer AX55 AX3000 Router",
    brand: "TP-Link",
    category: "Networking",
    price: 19500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: {
      Standard: "WiFi 6 (802.11ax)",
      Speed: "2402 Mbps on 5GHz + 574 Mbps on 2.4GHz",
      Processor: "Dual-Core CPU",
      Antennas: "4x High-Gain external antennas",
      Ports: "1x Gigabit WAN, 4x Gigabit LAN, 1x USB 3.0"
    },
    description: "Next-gen gigabit WiFi 6 router outputting up to 3Gbps bandwidth. Excellent for low-latency VR gaming and streaming 4K video.",
    highlights: [
      "WiFi 6 technology delivers higher capacity and faster speeds",
      "OFDMA increases capacity by 4x to connect more devices",
      "TP-Link HomeShield protects connected devices from cyber threats",
      "USB 3.0 port enables easy media and network sharing"
    ]
  },
  {
    id: "net-rog-gt6",
    name: "ASUS ROG Rapture GT6 WiFi 6 Mesh (Pair)",
    brand: "ROG",
    category: "Networking",
    price: 115000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: {
      Configuration: "2-Pack Mesh Router nodes",
      Standard: "Tri-Band AX10000 WiFi 6",
      Coverage: "Up to 5,800 sq ft",
      Ports: "2.5G WAN port, 3x Gigabit LAN",
      Security: "Lifetime Free AiProtection Pro"
    },
    description: "High-performance tri-band mesh system designed specifically for gamer households. Eliminates dead-zones in massive multi-story homes.",
    highlights: [
      "Sleek black nodes with ROG glowing aura sync logo",
      "Dedicated backhaul band keeps gaming connections lag-free",
      "Cover massive spaces up to 5,800 square feet",
      "Triple level game acceleration system prioritizes network packets"
    ]
  },
  {
    id: "net-dlink-x1560",
    name: "D-Link DIR-X1560 AX1500 Router",
    brand: "D-Link",
    category: "Networking",
    price: 12500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: {
      Standard: "WiFi 6",
      Speed: "1200 Mbps (5GHz) + 300 Mbps (2.4GHz)",
      Antennas: "4 external antennas"
    },
    description: "An affordable entryway into WiFi 6. Delivers great performance and stability for apartments and small family houses.",
    highlights: [
      "Cost-effective WiFi 6 upgrade path",
      "Voice controls with Google Assistant or Alexa",
      "Target Wake Time (TWT) extends mobile battery life",
      "Smart Connect steering routes devices to best band"
    ]
  },
  {
    id: "net-asus-pce-ac88",
    name: "ASUS PCE-AC88 Dual-Band PCI-E Adapter",
    brand: "ASUS",
    category: "Networking",
    price: 24500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: {
      Interface: "PCI-Express x1 slot",
      Speed: "AC3100 (up to 2167 Mbps on 5GHz)",
      Antennas: "4x Detachable antennas with magnetic base"
    },
    description: "High-end desktop PCI-E wireless card. Includes a magnetic antenna base to place antennas on top of your desk for unobstructed signals.",
    highlights: [
      "Massive 4x4 receiver array outputs faster desktop WiFi speed",
      "Custom red heatsink keeps adapter cool under high bandwidth",
      "External magnetic base offers flexible antenna locations",
      "MU-MIMO support guarantees dedicated connections"
    ]
  },

  // 19. Printers
  {
    id: "prnt-hp-laser",
    name: "HP LaserJet Pro M15w Wireless Printer",
    brand: "ASUS", // mapped to ASUS for dummy brand logic
    category: "Printers",
    price: 42500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Monochrome Laser Printer",
      Speed: "Up to 19 ppm",
      Connectivity: "WiFi, USB, HP Smart App integration",
      Size: "Ultra-compact form factor"
    },
    description: "The world's smallest laser printer in its class. Perfect for home offices, students, and businesses wanting clean, high-speed text prints.",
    highlights: [
      "Remarkably compact size fits on any shelf or desk corner",
      "Fast printing speeds up to 19 pages per minute",
      "Seamless printing from phone via HP Smart App",
      "Energy efficient auto-on/auto-off technology"
    ]
  },
  {
    id: "prnt-epson-l3250",
    name: "Epson EcoTank L3250 InkTank Printer",
    brand: "Samsung", // mapped to Samsung
    category: "Printers",
    price: 68500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Color InkTank 3-in-1 (Print, Scan, Copy)",
      Cost: "Ultra-low cost printing bottle system",
      Connectivity: "WiFi, WiFi Direct, Epson Smart Panel App",
      PageYield: "Up to 4,500 black / 7,500 color pages per refill"
    },
    description: "Excellent multi-functional color printer with an integrated ink tank system. Extremely low running costs, great for photos and documents.",
    highlights: [
      "Integrated spill-free ink bottle design",
      "Print, Scan, and Copy capability",
      "WiFi Direct allows printing from phone without router",
      "Refill bottles are highly affordable"
    ]
  },
  {
    id: "prnt-brother-2350",
    name: "Brother HL-L2350DW Mono Laser Printer",
    brand: "Intel",
    category: "Printers",
    price: 49500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Monochrome Laser Printer",
      Speed: "Up to 32 ppm",
      Duplex: "Automatic 2-Sided Printing",
      Capacity: "250-sheet paper tray capacity"
    },
    description: "A fast, heavy-duty black and white laser printer. Delivers automatic double-sided printing and high capacity tray management.",
    highlights: [
      "Blazing fast speeds up to 32 pages per minute",
      "Automatic two-sided printing saves paper costs",
      "Large 250-sheet adjustable paper drawer",
      "Wireless mobile device printing support"
    ]
  },
  {
    id: "prnt-canon-pixma",
    name: "Canon PIXMA G3411 Color InkTank",
    brand: "Samsung",
    category: "Printers",
    price: 58000,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Type: "Color InkTank 3-in-1",
      Connectivity: "Wireless WiFi & USB",
      PhotoPrinting: "Borderless photo printing support"
    },
    description: "High-yield color printer designed for home and office workspaces. Features front-facing refilling tanks.",
    highlights: [
      "Convenient front-facing visual ink tanks",
      "Vibrant high-resolution photo prints",
      "Scan and duplicate functions built-in",
      "PIXMA Cloud Link to print directly from online drives"
    ]
  },

  // 20. Accessories
  {
    id: "acc-elgato-deck",
    name: "Elgato Stream Deck MK.2 White",
    brand: "Corsair",
    category: "Accessories",
    price: 48500,
    availability: "in_stock",
    warranty: "1 Year Local Warranty",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    specs: {
      Keys: "15 customizable LCD keys",
      Interface: "USB 2.0 detachable cable",
      Stand: "Included 45-degree angle stand",
      Faceplate: "Interchangeable faceplate design"
    },
    description: "The ultimate tool for content creators and streamers. 15 tactile LCD keys to trigger actions, launch apps, mute mics, and adjust audio.",
    highlights: [
      "15 customizable LCD keys with dynamic visual icons",
      "Drag & drop actions using simple Stream Deck PC application",
      "Deeply integrated with OBS, Twitch, YouTube, and Discord",
      "Detachable USB-C cable and clean desktop stand"
    ]
  },
  {
    id: "acc-rog-balteus",
    name: "ASUS ROG Balteus Qi RGB Mouse Pad",
    brand: "ROG",
    category: "Accessories",
    price: 29500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: {
      Size: "370 x 320 mm Portrait orientation",
      Charging: "Built-in Qi Wireless charging zone (with LED indicator)",
      RGB: "15-zone Aura Sync RGB lighting customizer",
      Surface: "Hard micro-textured low friction surface"
    },
    description: "A premium portrait-oriented gaming mousepad. Features a hard low-friction surface, 15 RGB zones, and a wireless Qi charging pad for your phone.",
    highlights: [
      "Charge Qi-compatible phones directly on your mousepad while playing",
      "15 individually customizable Aura Sync RGB zones",
      "Built-in USB 2.0 pass-through port on top block",
      "Non-slip rubber base keeps mousepad planted"
    ]
  },
  {
    id: "acc-razer-kiyo",
    name: "Razer Kiyo Pro Streaming Webcam",
    brand: "Razer",
    category: "Accessories",
    price: 36500,
    availability: "in_stock",
    warranty: "1 Year Official Warranty",
    image: "https://images.unsplash.com/photo-1600541519463-ee359d9972c4?auto=format&fit=crop&w=600&q=80",
    specs: {
      Resolution: "1080p at 60 FPS / HDR at 30 FPS",
      Sensor: "High-performance Type 1/2.8 ultra-sensitive CMOS sensor",
      Lens: "Corning Gorilla Glass 3 with adjustable FOV (80 / 90 / 103 degrees)"
    },
    description: "High-performance USB webcam with adaptive light sensor. Captures incredible image fidelity even in low-lit rooms.",
    highlights: [
      "Incredible low-light capture performance with STARVIS technology",
      "Fluid 1080p 60FPS output makes streaming look smooth",
      "HDR mode compensates for bright backlighting",
      "Built-in privacy cover block"
    ]
  },
  {
    id: "acc-corsair-cables",
    name: "Corsair Premium Individually Sleeved PSU Cable Kit",
    brand: "Corsair",
    category: "Accessories",
    price: 26500,
    availability: "in_stock",
    warranty: "2 Years Local Warranty",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: {
      Material: "Flexible paracord sleeving",
      Compatibility: "Corsair Type 4 PSUs (RMx, RMi, SF series)",
      CablesIncluded: "1x 24-pin ATX, 2x EPS12V CPU, 2x PCIe Dual, 2x PCIe Single"
    },
    description: "Individually sleeved paracord cables in a complete kit. Includes pre-installed modular cable combs to keep routing neat.",
    highlights: [
      "Flexible three-layer mesh paracord sleeves",
      "Includes modular interlocking cable combs",
      "Heatshrink-free connector designs",
      "Wide compatibility with Corsair modular power supplies"
    ]
  }
];

// Generate extra products to reach around 80 items
const brands = [
  "ASUS", "ROG", "MSI", "Gigabyte", "Intel", "AMD", "NVIDIA", "Corsair",
  "Kingston", "Samsung", "WD", "Crucial", "Logitech", "Razer", "Cooler Master",
  "NZXT", "DeepCool", "TP-Link", "D-Link"
];

// Let's populate the remaining 40 products automatically to save code line length while ensuring complete data
const completeProducts = [...productsRaw];

// Helper to fill rest
const specDetails = {
  "Laptops": { Display: "15.6\" FHD 144Hz", RAM: "16GB DDR5", CPU: "Intel i7-13620H", GPU: "RTX 4050 6GB", OS: "Windows 11" },
  "Processors": { Socket: "AM5", Cores: "6 Cores", Threads: "12 Threads", MaxBoostClock: "5.1 GHz", Cache: "32MB Cache" },
  "Graphics Cards": { Memory: "12GB GDDR6", MemoryBus: "192-bit", Architecture: "Ada Lovelace", RecommendedPSU: "600W" },
  "Motherboards": { Socket: "LGA1700", Chipset: "Intel B760", MemorySupport: "DDR5 Dual Channel", FormFactor: "ATX" },
  "RAM": { Capacity: "16GB (2 x 8GB)", Speed: "5600 MHz", Latency: "CL40", Type: "DDR5" },
  "SSD": { Capacity: "1TB", Interface: "PCIe Gen 4.0 x4", SequentialRead: "Up to 5,000 MB/s", FormFactor: "M.2 2280" },
  "HDD": { Capacity: "2TB", SpindleSpeed: "7200 RPM", Cache: "256MB Cache", Interface: "SATA 6Gb/s" },
  "Power Supplies": { Wattage: "850W", EfficiencyRating: "80 Plus Gold", Modular: "Fully Modular" },
  "Cases": { Type: "Mid-Tower", Material: "Steel, Glass", GPUClearance: "360 mm" },
  "CPU Coolers": { Type: "Liquid AIO", RadiatorSize: "240 mm", Fans: "2x 120mm RGB" },
  "Gaming Monitors": { PanelSize: "27-inch IPS", Resolution: "1920 x 1080", RefreshRate: "144 Hz", ResponseTime: "1 ms" },
  "Mechanical Keyboards": { Layout: "TKL Layout", Switches: "Linear Red Mechanical", Connectivity: "Wired USB" },
  "Gaming Mice": { Weight: "69 grams", Sensor: "Optical 16,000 DPI", Connectivity: "Wired USB" },
  "Gaming Headsets": { Type: "Wired 3.5mm", Drivers: "50mm Neodymium", AudioSupport: "Stereo Audio" },
  "Controllers": { Connectivity: "Bluetooth / Wired", Vibration: "Dual Rumble Motors" },
  "Networking": { Standard: "WiFi 6", Speed: "1800 Mbps", Antennas: "4x High Gain" },
  "Printers": { Type: "Laser Monochrome", Speed: "20 ppm", Connectivity: "WiFi & USB" },
  "Accessories": { Type: "Gaming Accessory", Compatibility: "Universal PC compatibility" }
};

const templates = [
  {
    category: "Laptops",
    brand: "MSI",
    names: ["MSI Katana 15 B13V", "MSI Pulse 17 AI", "MSI Stealth 14 Studio"],
    desc: "Premium laptop offering solid build design and massive thermal headroom."
  },
  {
    category: "Processors",
    brand: "Intel",
    names: ["Intel Core i5-14400F", "Intel Core i5-13400F", "Intel Core i3-14100"],
    desc: "Highly efficient gaming processor with solid budget gaming performance."
  },
  {
    category: "Graphics Cards",
    brand: "NVIDIA",
    names: ["Gigabyte RTX 4070 SUPER WindForce", "ZOTAC Gaming RTX 4060 Ti 16GB", "MSI RTX 4060 Ventus 2X Black"],
    desc: "Next-gen ray tracing graphics card for smooth, stutter-free high-frame gaming."
  },
  {
    category: "Motherboards",
    brand: "ASUS",
    names: ["ASUS ROG Strix B650-A Gaming WiFi White", "ASUS TUF Gaming B760-Plus WiFi", "ASUS PRIME H610M-K D4"],
    desc: "Highly stable motherboard built for durable computing and easy BIOS navigation."
  },
  {
    category: "RAM",
    brand: "Crucial",
    names: ["Crucial Pro DDR5 32GB 5600MHz", "Crucial DDR5 16GB 4800MHz", "Crucial DDR4 8GB 3200MHz"],
    desc: "Standard high reliability memory modules for professional offices and desks."
  },
  {
    category: "SSD",
    brand: "Samsung",
    names: ["Samsung 980 1TB NVMe SSD", "Samsung 870 EVO 1TB SATA SSD", "Samsung 990 EVO 1TB PCIe 5.0"],
    desc: "Top of class solid state storage ensuring instant boots and massive lifespans."
  },
  {
    category: "Power Supplies",
    brand: "DeepCool",
    names: ["DeepCool PM850D 850W Gold", "DeepCool PF750 750W White", "DeepCool PK550D 550W Bronze"],
    desc: "Reliable power distributor with low heat output and high tolerance capacitors."
  },
  {
    category: "Cases",
    brand: "NZXT",
    names: ["NZXT H5 Flow Black", "NZXT H7 Elite Glass", "NZXT H5 Elite White"],
    desc: "Clean minimal PC chassis offering rapid routing setups and clear visibility."
  },
  {
    category: "CPU Coolers",
    brand: "DeepCool",
    names: ["DeepCool AK620 Digital Air Cooler", "DeepCool LE520 240mm Liquid AIO", "DeepCool AK400 Zero Dark"],
    desc: "Top thermal dissipation cooler running quiet even during prolonged compute renders."
  },
  {
    category: "Gaming Monitors",
    brand: "ASUS",
    names: ["ASUS TUF Gaming VG249Q1A 24\"", "ASUS VY279HE Eye Care 27\"", "ASUS ROG Strix PG27AQDM OLED"],
    desc: "Pristine panels with low response times and dynamic eye strain protection profiles."
  },
  {
    category: "Mechanical Keyboards",
    brand: "Razer",
    names: ["Razer Huntsman Mini 60%", "Razer Ornata V3 Mecha-Membrane", "Razer Huntsman V3 Pro TKL"],
    desc: "Esports ready optical keyboards offering rapid trigger resets and robust build frames."
  },
  {
    category: "Gaming Mice",
    brand: "Razer",
    names: ["Razer Cobra Pro Wireless", "Razer Orochi V2 Mobile Gaming Mouse", "Razer Basilisk V3 Ergonomic"],
    desc: "Sleek mouse mapping sensors precisely with zero lag and solid button click feedback."
  },
  {
    category: "Gaming Headsets",
    brand: "Razer",
    names: ["Razer Kraken V3 X USB", "Razer BlackShark V2 X Green", "Razer Barracuda X Wireless 2022"],
    desc: "Ergonomic game headset utilizing premium sound drivers and comfortable cushions."
  },
  {
    category: "Controllers",
    brand: "Logitech",
    names: ["Logitech F710 Wireless Gamepad", "Logitech F310 Wired Controller"],
    desc: "Durable controllers with full X-input capabilities mapping easily to games."
  },
  {
    category: "Networking",
    brand: "TP-Link",
    names: ["TP-Link Deco S7 AC1900 Mesh (3-Pack)", "TP-Link UB500 Bluetooth 5.0 Adapter", "TP-Link TL-SG1008D 8-Port Gigabit Switch"],
    desc: "Robust network interfaces guaranteeing packet integrity and high bandwidth."
  },
  {
    category: "Accessories",
    brand: "Logitech",
    names: ["Logitech C922 Pro Stream Webcam", "Logitech Litra Glow Stream Light"],
    desc: "Professional streaming utility accessories for lighting and video capturing."
  }
];

// Let's generate and populate up to 80 products
let counter = 1;
templates.forEach(tpl => {
  tpl.names.forEach((pname, idx) => {
    const slug = pname.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const categorySpecs = specDetails[tpl.category] || { Type: tpl.category };
    
    completeProducts.push({
      id: `${tpl.category.toLowerCase().replace(/[^a-z]/g, "")}-${idx}-${slug}`,
      name: pname,
      brand: tpl.brand,
      category: tpl.category,
      price: 12000 + (Math.floor(Math.random() * 25) * 5000),
      availability: Math.random() > 0.15 ? "in_stock" : "out_of_stock",
      warranty: "1 Year Official Warranty",
      image: completeProducts.find(p => p.category === tpl.category)?.image || "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
      specs: {
        ...categorySpecs,
        Model: pname
      },
      description: tpl.desc,
      highlights: [
        "Genuine factory certified product",
        "Official warranty distribution in Pakistan",
        "High performance design and build",
        "Full support via WhatsApp chat"
      ]
    });
  });
});

// Add extra category placeholders to hit exactly 80 items
const allCategories = categories;
let currentProductsCount = completeProducts.length;

// Loop and fill to 80 products
while (completeProducts.length < 80) {
  const cat = allCategories[completeProducts.length % allCategories.length];
  const brand = brands[completeProducts.length % brands.length];
  const idStr = `${cat.toLowerCase().replace(/[^a-z]/g, "")}-extra-${completeProducts.length}`;
  const specTemplate = specDetails[cat] || { Type: cat };
  
  completeProducts.push({
    id: idStr,
    name: `${brand} Premium ${cat} Model X${completeProducts.length}`,
    brand: brand,
    category: cat,
    price: 15000 + (Math.floor(Math.random() * 40) * 4500),
    availability: Math.random() > 0.1 ? "in_stock" : (Math.random() > 0.5 ? "pre_order" : "out_of_stock"),
    warranty: "1 Year Official Warranty",
    image: completeProducts.find(p => p.category === cat)?.image || "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    specs: {
      ...specTemplate,
      Model: `X${completeProducts.length}`
    },
    description: `A premium high-performance selection in the ${cat} category. Designed and tested for maximum stability and speed.`,
    highlights: [
      "Official original hardware import",
      "Tested and verified by ROG Store technicians",
      "Ready to deploy in gaming or workstation builds",
      "12 Months Official Warranty included"
    ]
  });
}

// Ensure the directory exists
const dir = path.join(__dirname);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(
  path.join(dir, 'products.json'),
  JSON.stringify(completeProducts, null, 2),
  'utf-8'
);

console.log(`Successfully generated ${completeProducts.length} products in products.json!`);

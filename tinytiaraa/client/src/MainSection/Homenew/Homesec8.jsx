
import { useEffect, useState } from "react"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle, Instagram, Film, ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Homesec8 = () => {
  const [media, setMedia] = useState([])
  const [username, setUsername] = useState("")
  const [reels, setReels] = useState([])
  const [posts, setPosts] = useState([])
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const accessToken =
      "EAAQI3kdFLIMBO4Of7AwXgZAyKqFmcLyNpnRj0qsNcTC7v9IO0qqZCJmvF05TAB8cGgMHskNpQ2eBbzcpRAokZAzKpwHIqDo7BTXTiC1MWZBnRQzJzNeYGZBcJC0iZCZBq0xyKOUQXW95XMErrwi7fPggedaKpW8Ob8PTMRL7amoZBiMU7KDrzece" // Replace with your real token
    const pageId = "142039082320769" // Replace with your FB Page ID
    useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const pageRes = await axios.get(`https://graph.facebook.com/v22.0/${pageId}`, {
          params: {
            fields: "instagram_business_account",
            access_token: accessToken,
          },
        })

        const igUserId = pageRes.data.instagram_business_account?.id
        if (!igUserId) return console.error("Instagram Business Account not found")

        const userRes = await axios.get(`https://graph.facebook.com/v22.0/${igUserId}`, {
          params: {
            fields: "username",
            access_token: accessToken,
          },
        })
        setUsername(userRes.data.username)

        // Fetch owned media
        let mediaUrl = `https://graph.facebook.com/v22.0/${igUserId}/media`
        let allMedia = []
        while (mediaUrl) {
          const res = await axios.get(mediaUrl, {
            params: {
              fields: "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink",
              access_token: accessToken,
            },
          })
          allMedia = [...allMedia, ...res.data.data]
          mediaUrl = res.data.paging?.next || null
        }

        // Fetch tagged media
        let taggedUrl = `https://graph.facebook.com/v22.0/${igUserId}/tags`
        let allTagged = []
        while (taggedUrl) {
          const res = await axios.get(taggedUrl, {
            params: {
              fields: "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink",
              access_token: accessToken,
            },
          })
          allTagged = [...allTagged, ...res.data.data]
          taggedUrl = res.data.paging?.next || null
        }

        // Separate Reels and Posts
        const reelsOnly = [...allMedia, ...allTagged]
          .filter(item => item.media_type === "VIDEO")
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

        const postsOnly = allMedia
          .filter(item => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

        setReels(reelsOnly)
        setPosts(postsOnly)
      } catch (err) {
        console.error("Failed to fetch Instagram data:", err)
      }
    }

    fetchInstagramData()
  }, [])

  const handlePrev = () => swiper?.slidePrev()
  const handleNext = () => swiper?.slideNext()

  const renderSwiper = (filteredMedia) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="overflow-hidden px-4"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ padding: "10px 0" }}
      >
        <AnimatePresence>
          {filteredMedia.map((item, index) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "220px", height: "360px" }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => window.open(item.permalink, "_blank")}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: (index * 0.1) % 0.5 }}
                className="w-full h-full relative"
              >
                {item.media_type === "VIDEO" ? (
                  <>
                    <video
                      src={item.media_url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Show Play icon only on hover */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                            <PlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                        </div>
                    </motion.div>
                    <motion.div
                      className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Film className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">Reel</span>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.media_url || "/placeholder.svg"}
                      alt="Instagram Post"
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Instagram className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">Post</span>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </AnimatePresence>
      </Swiper>
    </motion.div>
  )

  // const posts = media.filter((m) => m.media_type !== "VIDEO")
  // const reels = media.filter((m) => m.media_type === "VIDEO")

  return (
    <div className="py-12 px-4 bg-white relative overflow-hidden">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    }}
    className="text-center mb-3"
  >
    <motion.div
      className="inline-flex items-center gap-2 mb-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { scale: 0.9 },
        visible: { scale: 1 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 15,
      }}
    >
      <Instagram className="text-pink-600 w-6 h-6" />
      <a
        href={`https://instagram.com/${username || "tiny_tiaraa"}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-pink-600 hover:underline"
      >
        @{username || "username"}
      </a>
    </motion.div>

    <h2 className="text-xl md:text-2xl font-bold text-[#D7A295]">Watch and Shop</h2>
  </motion.div>

  <Tabs defaultValue="reels" className="w-full">
    <TabsList className="mx-auto mb-2 flex justify-center bg-[#D7A295]/60 rounded-lg w-fit">
      <TabsTrigger value="reels" className="cursor-pointer px-5 py-1 text-white">Reels</TabsTrigger>
      <TabsTrigger value="posts" className="cursor-pointer px-5 py-1 text-white">Posts</TabsTrigger>
    </TabsList>

    <div className="relative">
      {/* Left Arrow */}
      <motion.button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg -ml-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.5 }}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg -mr-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.5 }}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </motion.button>

      <TabsContent value="reels">{renderSwiper(reels)}</TabsContent>
      <TabsContent value="posts">{renderSwiper(posts)}</TabsContent>
    </div>
  </Tabs>
</div>

  )
}

export default Homesec8

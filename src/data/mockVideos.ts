export type mockVideosType = {
    id: string;
    title: string;
    channel: string;
    views: string;
    published: string;
    tags: string[];
    thumbnail: string;
    time: string;
    videoUrl: string;
    comments: {
        name: string;
        date: string;
        comment: string;
    }[]
}

export const mockVideos = [
    {
        id: "1",
        title: "Udaayo Mann | BEHULI from MEGHAULI Nepali",
        channel: "OSR Digital",
        views: "11M",
        published: "1 month ago",
        tags: ["Vocal Music", "Nepali", "Sushant KC"],
        thumbnail: "https://picsum.photos/463/260?random=1",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/6-a_wfFF_Xg?si=bHu6-fbn9pisei7c",
        comments: [
            { name: "Aayush Thapa", date: "2025-05-10", comment: "This song touches the soul!" },
            { name: "Pooja Gurung", date: "2025-05-12", comment: "Beautifully shot and sung." },
        ],
    },
    {
        id: "2",
        title: "Sunkeshari | Nepali Horror Movie",
        channel: "Highlights Nepal",
        views: "2M",
        published: "3 weeks ago",
        tags: ["Horror", "Nepali", "Movie"],
        thumbnail: "https://picsum.photos/463/260?random=2",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/QnZC3xw1vUE",
        comments: [
            { name: "Manish Karki", date: "2025-05-15", comment: "Terrifying but amazing effects!" },
            { name: "Saru Sharma", date: "2025-05-16", comment: "Loved the plot twist." },
            { name: "Anish Thapa", date: "2025-05-17", comment: "Sound design gave me chills!" },
            { name: "Rekha Shrestha", date: "2025-05-18", comment: "Great acting and suspense." },
            { name: "Kiran Lama", date: "2025-05-18", comment: "Ending left me speechless!" },
            { name: "Nisha Gurung", date: "2025-05-19", comment: "Absolutely stunning cinematography." },
            { name: "Sagar Bista", date: "2025-05-20", comment: "Wish it was longer." },
            { name: "Binita Rai", date: "2025-05-20", comment: "Creepy in the best way!" },
            { name: "Roshan Shakya", date: "2025-05-21", comment: "Loved every minute." },
            { name: "Samiksha Adhikari", date: "2025-05-22", comment: "Background score was perfect!" },
            { name: "Pratik Subba", date: "2025-05-22", comment: "Scary and emotional at the same time." },
            { name: "Alisha KC", date: "2025-05-23", comment: "Great mix of horror and drama." },
            { name: "Sujan Maharjan", date: "2025-05-23", comment: "Didn't expect that twist!" },
            { name: "Apsara Neupane", date: "2025-05-24", comment: "So intense and beautifully shot." },
            { name: "Bibek Poudel", date: "2025-05-24", comment: "Plot was tight and gripping." },
            { name: "Shristi Khadka", date: "2025-05-25", comment: "I couldn't sleep after watching it." },
            { name: "Niraj Bhattarai", date: "2025-05-25", comment: "Really powerful themes." },
            { name: "Sujita Tamang", date: "2025-05-26", comment: "Every scene was memorable." },
            { name: "Prajwal Raut", date: "2025-05-26", comment: "One of the best horror films lately." },
            { name: "Meena Ale", date: "2025-05-27", comment: "So well done. Bravo!" }
        ]

    },
    {
        id: "3",
        title: "Aama | An Emotional Short Film",
        channel: "Channel Arbitrary",
        views: "5.6M",
        published: "2 months ago",
        tags: ["Short Film", "Nepali", "Family"],
        thumbnail: "https://picsum.photos/463/260?random=3",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
        comments: [
            { name: "Kabita Rana", date: "2025-04-20", comment: "This made me cry." },
            { name: "Kiran Bista", date: "2025-04-21", comment: "Very moving storyline!" },
        ],
    },
    {
        id: "4",
        title: "How to Make Momo | Nepali Street Food",
        channel: "Foodie Nepal",
        views: "9M",
        published: "3 weeks ago",
        tags: ["Food", "Nepali", "Cooking"],
        thumbnail: "https://picsum.photos/463/260?random=4",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
        comments: [
            { name: "Binita Lama", date: "2025-05-05", comment: "I tried it and it turned out awesome!" },
            { name: "Sujan Rai", date: "2025-05-06", comment: "Now I’m hungry 😋" },
        ],
    },
    {
        id: "5",
        title: "Top 10 Places to Visit in Nepal",
        channel: "Explore Nepal",
        views: "3.2M",
        published: "1 month ago",
        tags: ["Travel", "Nepal", "Tourism"],
        thumbnail: "https://picsum.photos/463/260?random=5",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        comments: [
            { name: "Rajesh KC", date: "2025-05-02", comment: "Can’t wait to visit again!" },
            { name: "Nisha Shahi", date: "2025-05-03", comment: "Pokhara is my favorite!" },
        ],
    },
    {
        id: "6",
        title: "Kutu Ma Kutu | Nepali Dance Hit",
        channel: "Music Nepal",
        views: "18M",
        published: "4 months ago",
        tags: ["Dance", "Nepali", "Song"],
        thumbnail: "https://picsum.photos/463/260?random=6",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/XqZsoesa55w",
        comments: [
            { name: "Sandeep Thapa", date: "2025-03-30", comment: "Never gets old!" },
            { name: "Pratiksha Khadka", date: "2025-04-01", comment: "Dance performance was fire!" },
        ],
    },
    {
        id: "7",
        title: "Nepali Comedy Club | Best of 2024",
        channel: "Comedy Club Nepal",
        views: "1.3M",
        published: "2 weeks ago",
        tags: ["Comedy", "Nepali", "Stand-up"],
        thumbnail: "https://picsum.photos/463/260?random=7",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/J---aiyznGQ",
        comments: [
            { name: "Aakash Regmi", date: "2025-05-29", comment: "Laughed so hard!" },
            { name: "Sneha Neupane", date: "2025-05-30", comment: "These guys are too good!" },
        ],
    },
    {
        id: "8",
        title: "Yoga in the Himalayas | Daily Routine",
        channel: "Nepal Wellness",
        views: "750K",
        published: "1 week ago",
        tags: ["Yoga", "Wellness", "Nepal"],
        thumbnail: "https://picsum.photos/463/260?random=8",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        comments: [
            { name: "Ritika Joshi", date: "2025-06-01", comment: "So calming to watch!" },
            { name: "Gopal Bhattarai", date: "2025-06-02", comment: "Great routine for beginners." },
        ],
    },
    {
        id: "9",
        title: "History of Kathmandu Valley",
        channel: "History Nepal",
        views: "2.5M",
        published: "5 months ago",
        tags: ["History", "Nepal", "Documentary"],
        thumbnail: "https://picsum.photos/463/260?random=9",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
        comments: [
            { name: "Dipak Maharjan", date: "2025-01-22", comment: "Very informative!" },
            { name: "Shristi Pokhrel", date: "2025-01-25", comment: "Proud of our heritage." },
        ],
    },
    {
        id: "10",
        title: "React Tutorial in Nepali | Beginner Friendly",
        channel: "Code With Suraj",
        views: "95K",
        published: "2 days ago",
        tags: ["React", "Programming", "Tutorial"],
        thumbnail: "https://picsum.photos/463/260?random=10",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
        comments: [
            { name: "Ravi Dev", date: "2025-06-05", comment: "This is so clear. Thanks dai!" },
            { name: "Prerana Lama", date: "2025-06-06", comment: "Loved the Nepali explanation!" },
        ],
    },
    {
        id: "11",
        title: "Chhakka Panja | Full Comedy Movie",
        channel: "Highlights Nepal",
        views: "22M",
        published: "6 months ago",
        tags: ["Movie", "Nepali", "Comedy"],
        thumbnail: "https://picsum.photos/463/260?random=11",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/eVTXPUF4Oz4",
        comments: [
            { name: "Ramesh Shrestha", date: "2025-05-01", comment: "Still one of the funniest movies!" },
            { name: "Nisha Adhikari", date: "2025-05-03", comment: "Never gets old." },
        ],
    },
    {
        id: "12",
        title: "Street Interview in Thamel | Youth Talk",
        channel: "Nepal Voice",
        views: "610K",
        published: "1 month ago",
        tags: ["Interview", "Nepali", "Youth"],
        thumbnail: "https://picsum.photos/463/260?random=12",
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        comments: [
            { name: "Anusha Poudel", date: "2025-05-14", comment: "Raw and real perspectives!" },
            { name: "Bishal Aryal", date: "2025-05-15", comment: "Loved how honest the responses were." },
        ],
    },
    {
        id: "13",
        title: "Top 10 ",
        channel: "Explore Nepal",
        views: "3.2M",
        published: "1 month ago",
        tags: ["Travel", "Nepal", "Tourism"],
        thumbnail: `https://picsum.photos/463/260?random=${Math.random() * 10}`,
        time: `${Math.floor(Math.random() * 12) + 1} days ago`,
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        comments: [
            { name: "Rajesh KC", date: "2025-05-02", comment: "Can’t wait to visit again!" },
            { name: "Nisha Shahi", date: "2025-05-03", comment: "Pokhara is my favorite!" },
        ],
    },
];
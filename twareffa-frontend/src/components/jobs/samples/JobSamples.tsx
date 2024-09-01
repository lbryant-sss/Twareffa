
export interface Job {
    jid: number;
    created_at: string;
    job_description: string;
    job_media_link: string;
    bid_amount: string;
    town: string;
    location: string;
    skills: string;
    user_id: number;
}

 
const JobSamples: Job[] = [
    {
        user_id: 1,
        jid: 1,
        created_at: "14 min ago",
        job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt, nobis soluta neque architecto facilis est reprehenderit eveniet mollitia repellendus! Quod, nihil ut a necessitatibus optio omnis dignissimos facere in",
        job_media_link: "https://www.progressive.com/lifelanes/wp-content/uploads/2022/06/PN1305_HowOftenWashCar_Header-1.jpg",
        bid_amount: "300",
        town: "Kiserian",
        location: "Triangle",
        skills: "None",
    },
    {
        user_id: 2,
        jid: 2,
        created_at: "1 min ago",
        job_description: "I need a chef for my granny's birthday.",
        job_media_link: "https://img.freepik.com/free-vector/sticker-design-with-chef-girl-cooking-food-cartoon-character_1308-64629.jpg",
        bid_amount: "300",
        town: "Westlands Square",
        location: "Westlands",
        skills: "None",
    }

]
export default JobSamples;
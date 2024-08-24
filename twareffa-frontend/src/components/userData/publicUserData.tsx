export interface User {
    uid: number;
    username: string;
    profile_picture: string;
    payment_verification: boolean;
    id_verification: boolean;
    work_rating: number;
    employer_rating: number;
    jobs_completed: number;
    jobs_posted: number;
}

const publicUserData: User[] = [
    {
        uid: 1,
        username: "Brian Mungai",
        profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s",
        payment_verification: true,
        id_verification: true,
        work_rating: 4,
        employer_rating: 4,
        jobs_completed: 22,
        jobs_posted: 11,
    }
]

export default publicUserData;
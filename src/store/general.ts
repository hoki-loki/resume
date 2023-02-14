import { defineStore } from "pinia";
import {Ref} from "vue";

const useGeneralStore = defineStore('general',{
    state: () => ({
        img_rec: [
            'https://elanta.app/nazar/arter-demo-new/img/testimonials/face-1.jpg',
            'https://elanta.app/nazar/arter-demo-new/img/testimonials/face-2.jpg',
            'https://elanta.app/nazar/arter-demo-new/img/testimonials/face-3.jpg',
            'https://elanta.app/nazar/arter-demo-new/img/testimonials/face-4.jpg',
            'https://elanta.app/nazar/arter-demo-new/img/testimonials/face-1.jpg',
        ],
        img_shared: [
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/2.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/3.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/4.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/5.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/6.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/7.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/8.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/9.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/10.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/11.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/works/thumbnail/13.jpg",
        ],
        img_blog: [
            "https://elanta.app/nazar/arter-demo-new/img/blog/1.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/2.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/3.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/4.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/5.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/6.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/7.jpg",
            "https://elanta.app/nazar/arter-demo-new/img/blog/8.jpg",
        ],
    }),
});
export { useGeneralStore };
export default useGeneralStore;
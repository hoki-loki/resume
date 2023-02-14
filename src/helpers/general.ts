class General {
    public OpenGoogleMap(item: string) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&query_place_id=${item}`, '_blank')
    }

    public ScrollCarousel = async (btn: string, value: any) => {
        let w = window.innerWidth
        let el = value.value

        if (el) {
            let base_scroll = el.scrollLeft

            if (btn === 'prev') {
                await el.scrollTo({
                    left: base_scroll - (w / 2),
                    behavior: "smooth"
                })

            } else {
                el.scrollTo({
                    left: base_scroll + (w / 2),
                    behavior: "smooth"
                })
            }
        }
    }
}

const instance = new General();
export default instance

export {instance}
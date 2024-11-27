/**
 *
 */
export const useRouteHistory = () => {
    type Link = {
        label: string;
        to: string;
    };
    const SIZE = 6;
    const historyStore = useState("sitehistroy", () => new Array<Link>());
    return ref({
        push: (link: Link): void => {
            if (historyStore.value.length >= SIZE) {
                historyStore.value.pop();
            }
            historyStore.value.push(link);
        },
        value: historyStore.value,
    });
};

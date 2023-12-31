import Expandos from "./expandos";
import RedditMarquee from "./marquee";
import RESButtons from "./resButtons";
import Sidebar from "./sidebar";
import RESCompatibility from "./RESCompatibility";
import PostsEnhancements from "./posts";
import { OLFeature } from "./base";
type Constructor = new (...args: any[]) => OLFeature;
const features: Array<Constructor> = [Expandos, RESButtons, Sidebar,  RESCompatibility, RedditMarquee];
features.push(...PostsEnhancements)
export default features;

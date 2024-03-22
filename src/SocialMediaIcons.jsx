import { SocialIcon } from "react-social-icons";

const bgColor = "#16a34a";
const fgColor = "#e5e7eb";
const styles = "mr-[6px]";
const animate = "";

export const X = () => {
  return (
    <div className={`${styles} ${animate} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="x"
      />
    </div>
  );
};
export const Facebook = () => {
  return (
    <div className={`${styles} ${animate} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="facebook"
      />
    </div>
  );
};
export const Instagram = () => {
  return (
    <div className={`${styles} ${animate} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="instagram"
      />
    </div>
  );
};
export const Threads = () => {
  return (
    <div className={`${styles} ${animate} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="threads"
      />
    </div>
  );
};
export const Tiktok = () => {
  return (
    <div className={`${styles} ${animate} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="tiktok"
      />
    </div>
  );
};

export const Whatsapp = () => {
  return (
    <div className={`${styles} h-8 w-8 md:h-9 md:w-9`}>
      <SocialIcon
        className={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ width: "100%", height: "100%" }}
        network="whatsapp"
      />
    </div>
  );
};

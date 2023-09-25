import Image from "next/image"
import ProfileImage from "@/src/assets/profile.png"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <Image className="w-8 h-8 rounded-2" alt="None" src={ProfileImage} />
                <div>
                    <p>0x1ae1....6c1c</p>
                    <p>$1522.27</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
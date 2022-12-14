const style = {
    profilePic: 'h-4 w-4 rounded-full',
    wrapper: 'flex items-center space-x-1 text-xs text-[#818384]',
    profilePicContainer: 'flex items-center space-x-1',
    tag: 'cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline',
    postedBy: 'flex items-center space-x-1'
}

const Info = ({author}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.profilePicContainer}>
                <img
                    className={style.profilePic}
                    src='https://media.discordapp.net/attachments/1036690488595578940/1036991588297080902/viper_X_me.png' 
                />
            </div>
            
            <div className={style.tag}>r/sncgeeks</div>

            <div>•</div>
                <div className={style.postedBy}>
                    <span>Posted by {author}</span>
                    <span>•</span>
                    <span>April 12</span>
                </div>
        </div>
            
            

    )
}
export default Info

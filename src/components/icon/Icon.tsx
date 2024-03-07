
import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType ={
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
<svg width="50px" height="50px" viewBox="0 0 50px 50px" fill="none" xmlns="http://www.w3.org/2000/svg">


            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
    );
};

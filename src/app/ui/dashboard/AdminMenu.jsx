
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import MenuList from "./MenuList";


const AdminMenu = () => {
    return (
        <>
            <MenuList label={'All Users'} icon={MdOutlineMapsHomeWork} address={'users'}></MenuList>
            <MenuList label={'All Orders'} icon={CiBookmarkCheck} address={'orders'}></MenuList>
            <MenuList label={'Add Products'} icon={MdOutlineRateReview} address={'addProducts'}></MenuList>
            <MenuList label={'Added Products'} icon={FaOpencart} address={'addedProducts'}></MenuList>
        </>
    );
};

export default AdminMenu;
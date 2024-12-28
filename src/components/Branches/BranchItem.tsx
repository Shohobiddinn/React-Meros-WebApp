import { Branches } from "../../@types/branchTypes";

interface BranchItemProps {
    item: Branches;  
}

const BranchItem: React.FC<BranchItemProps> = ({ item }) => {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.status ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

export default BranchItem;

"use client";
import React, { FC } from "react";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/index";
import { updateSearchParams } from "@/utils";

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPatchName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPatchName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

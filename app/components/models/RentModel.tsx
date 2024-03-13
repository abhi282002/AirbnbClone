"use client";
import useRentModel from "@/app/hook/useRentModel";
import Model from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";

import { categories } from "../navbar/Categories";
import CategoryInput from "../Inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../Inputs/CountrySelect";
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModel = () => {
  const rentModel = useRentModel();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step == STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);
  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => {
          return (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category) => setCustomValue("category", category)}
                selected={category == item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
  if (step == STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
      </div>
    );
  }
  return (
    <Model
      isOpen={rentModel.isOpen}
      title="Airbnb your home!"
      onClose={rentModel.onClose}
      actionLabel={actionLabel}
      secondaryLabel={secondaryActionLabel}
      secondaryAction={step == STEPS.CATEGORY ? undefined : onBack}
      onSubmit={onNext}
      body={bodyContent}
    />
  );
};

export default RentModel;
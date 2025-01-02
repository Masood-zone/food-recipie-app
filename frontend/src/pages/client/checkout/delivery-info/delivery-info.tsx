import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DeliveryInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            {...register("firstname", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input id="lastname" {...register("lastname", { required: true })} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <Label htmlFor="street_name">Street Name</Label>
        <Input
          id="street_name"
          {...register("street_name", { required: true })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" {...register("city", { required: true })} />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input id="state" {...register("state", { required: true })} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="zipcode">Zip Code</Label>
          <Input id="zipcode" {...register("zipcode", { required: true })} />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" {...register("country", { required: true })} />
        </div>
      </div>
      <div>
        <Label htmlFor="phonenumber">Phone Number</Label>
        <Input
          id="phonenumber"
          {...register("phonenumber", { required: true })}
        />
      </div>
    </div>
  );
}

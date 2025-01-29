import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { SketchPicker } from "react-color";
import { SketchPicker } from "react-color";

export default function KitchenDesigner() {
  const [layout, setLayout] = useState("L-Shape");
  const [cabinetColor, setCabinetColor] = useState("#ffffff");
  const [countertop, setCountertop] = useState("Quartz");
  const [kitchenSize, setKitchenSize] = useState(10);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Kitchen Design Tool</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Select Layout</h3>
            <Select value={layout} onValueChange={setLayout}>
              <SelectTrigger>
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L-Shape">L-Shape</SelectItem>
                <SelectItem value="U-Shape">U-Shape</SelectItem>
                <SelectItem value="Galley">Galley</SelectItem>
                <SelectItem value="Island">Island</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Cabinet Color</h3>
            <SketchPicker
              color={cabinetColor}
              onChange={(color) => setCabinetColor(color.hex)}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Countertop Material</h3>
            <Select value={countertop} onValueChange={setCountertop}>
              <SelectTrigger>
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Quartz">Quartz</SelectItem>
                <SelectItem value="Granite">Granite</SelectItem>
                <SelectItem value="Marble">Marble</SelectItem>
                <SelectItem value="Wood">Wood</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Kitchen Size (ft)</h3>
            <Slider
              value={[kitchenSize]}
              onValueChange={(value) => setKitchenSize(value[0])}
              min={6}
              max={20}
            />
            <p>{kitchenSize} ft</p>
          </CardContent>
        </Card>
      </div>
      <Button className="mt-6 w-full">Generate Kitchen Design</Button>
    </div>
  );
}

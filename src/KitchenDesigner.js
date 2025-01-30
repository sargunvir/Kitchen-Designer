import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { SketchPicker } from "react-color";

export default function KitchenDesigner() {
  const [layout, setLayout] = useState("L-Shape");
  const [cabinetColor, setCabinetColor] = useState("#ffffff");
  const [countertop, setCountertop] = useState("Quartz");
  const [kitchenSize, setKitchenSize] = useState(10);
  const [generatedDesign, setGeneratedDesign] = useState(null);

  const generateDesign = () => {
    const design = {
      layout,
      cabinetColor,
      countertop,
      kitchenSize,
    };
    setGeneratedDesign(design);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Kitchen Design Tool</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <Card.Body>
            <h3 className="text-lg font-semibold">Select Layout</h3>
            <Form.Select value={layout} onChange={(e) => setLayout(e.target.value)}>
              <option value="L-Shape">L-Shape</option>
              <option value="U-Shape">U-Shape</option>
              <option value="Galley">Galley</option>
              <option value="Island">Island</option>
            </Form.Select>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3 className="text-lg font-semibold">Cabinet Color</h3>
            <SketchPicker
              color={cabinetColor}
              onChange={(color) => setCabinetColor(color.hex)}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3 className="text-lg font-semibold">Countertop Material</h3>
            <Form.Select value={countertop} onChange={(e) => setCountertop(e.target.value)}>
              <option value="Quartz">Quartz</option>
              <option value="Granite">Granite</option>
              <option value="Marble">Marble</option>
              <option value="Wood">Wood</option>
            </Form.Select>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3 className="text-lg font-semibold">Kitchen Size (ft)</h3>
            <Form.Range
              value={kitchenSize}
              onChange={(e) => setKitchenSize(Number(e.target.value))}
              min={6}
              max={20}
            />
            <p>{kitchenSize} ft</p>
          </Card.Body>
        </Card>
      </div>
      <Button className="mt-6 w-full" onClick={generateDesign}>Generate Kitchen Design</Button>

      {generatedDesign && (
        <div className="mt-6 p-4 border rounded bg-light">
          <h3>Generated Kitchen Design:</h3>
          <p><strong>Layout:</strong> {generatedDesign.layout}</p>
          <p><strong>Cabinet Color:</strong> <span style={{backgroundColor: generatedDesign.cabinetColor, padding: '5px', color: '#fff'}}>{generatedDesign.cabinetColor}</span></p>
          <p><strong>Countertop:</strong> {generatedDesign.countertop}</p>
          <p><strong>Size:</strong> {generatedDesign.kitchenSize} ft</p>
        </div>
      )}
    </div>
  );
}

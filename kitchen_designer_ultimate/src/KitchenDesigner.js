import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const cabinetColors = [
  { name: "White Shaker", hex: "#F0F0F0" },
  { name: "Espresso", hex: "#4B2E2E" },
  { name: "Classic Oak", hex: "#D4A76A" },
  { name: "Grey Modern", hex: "#A0A0A0" },
  { name: "Cherry Wood", hex: "#8B3A3A" },
  { name: "Black Matte", hex: "#1C1C1C" },
  { name: "Custom", hex: null }
];

export default function KitchenDesigner() {
  const [layout, setLayout] = useState("L-Shape");
  const [cabinetColor, setCabinetColor] = useState(cabinetColors[0]);
  const [countertop, setCountertop] = useState("Quartz");
  const [kitchenSize, setKitchenSize] = useState(10);
  const [generatedDesign, setGeneratedDesign] = useState(null);

  const generateDesign = () => {
    setGeneratedDesign({
      layout,
      cabinetColor: cabinetColor.name,
      countertop,
      kitchenSize,
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Design Your Dream Kitchen</h2>

      <Card className="mb-3">
        <Card.Body>
          <h3 className="mb-2">Select Layout</h3>
          <Form.Select value={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="L-Shape">L-Shape</option>
            <option value="U-Shape">U-Shape</option>
            <option value="Galley">Galley</option>
            <option value="Island">Island</option>
          </Form.Select>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h3 className="mb-2">Select Cabinet Color</h3>
          <div className="d-flex flex-wrap">
            {cabinetColors.map((color) => (
              <div
                key={color.name}
                onClick={() => setCabinetColor(color)}
                style={{
                  backgroundColor: color.hex || "#CCC",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  cursor: "pointer",
                  border: cabinetColor.name === color.name ? "3px solid black" : "none"
                }}
                title={color.name}
              ></div>
            ))}
          </div>
          <p className="mt-2"><strong>Selected:</strong> {cabinetColor.name}</p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h3 className="mb-2">Countertop Material</h3>
          <Form.Select value={countertop} onChange={(e) => setCountertop(e.target.value)}>
            <option value="Quartz">Quartz</option>
            <option value="Granite">Granite</option>
            <option value="Marble">Marble</option>
            <option value="Wood">Wood</option>
          </Form.Select>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h3 className="mb-2">Kitchen Size (ft)</h3>
          <Form.Range
            value={kitchenSize}
            onChange={(e) => setKitchenSize(Number(e.target.value))}
            min={6}
            max={20}
          />
          <p className="mt-2"><strong>Size:</strong> {kitchenSize} ft</p>
        </Card.Body>
      </Card>

      <Button className="mt-4 w-100 btn-primary" onClick={generateDesign}>Generate Kitchen Design</Button>

      {generatedDesign && (
        <div className="mt-4 p-4 border rounded bg-light">
          <h3>Generated Kitchen Design:</h3>
          <p><strong>Layout:</strong> {generatedDesign.layout}</p>
          <p><strong>Cabinet Color:</strong> {generatedDesign.cabinetColor}</p>
          <p><strong>Countertop:</strong> {generatedDesign.countertop}</p>
          <p><strong>Size:</strong> {generatedDesign.kitchenSize} ft</p>
        </div>
      )}
    </div>
  );
}

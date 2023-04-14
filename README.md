# diagramming

Be the problem described at https://docs.google.com/document/d/1yrovqPPk8AZlMdh07Zlm9MIyRjq9_rj6u7nORVsOBMQ/edit

For this problem, I assumed:

-   Shapes must have a centroid point to describe their absolute position in the canvas.
-   Vertices will be described as relative positions from the centroid -> centroids are (0, 0) inside the shapes.
-   When shapes are moved, we only need to recalculate their centroid's position.
-   When polygons (at least 3 vertices) are resized, we need to recalculate their vertices position multiplying then by the percent argument
    (all values will be rounded and the positions should be integer).
-   When a circle is resized, we need to recalculate its radio length.
-   Connectors will only exist when connected to two shapes, and when a shape is deleted, all its connectors are also deleted.
-   For the arrow connectors, we assumed their direction from Shape A to Shape B.
-   The meaning of “contained” for multi-selection will be considered all shapes whose centroids are inside the range (just to simplify the search).

To execute this project:

-   install: npm install
-   start: npm run start -> will be executed at localhost:4000 (port can be changed in the .env file)
-   execute all tests: npm run test
-   get tests coverage: npm run test:coverage
